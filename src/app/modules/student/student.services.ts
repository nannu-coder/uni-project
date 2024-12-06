import mongoose from 'mongoose';
import { Student } from './student.model';
import AppError from '../../errors/appError';
import { StatusCodes } from 'http-status-codes';
import { User } from '../user/user.model';

const getAllStudentFromDb = async () => {
  const result = await Student.find();
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const deletedStudent = await Student.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );
    if (!deletedStudent) {
      throw new AppError(StatusCodes.BAD_REQUEST, 'Failed to delete student');
    }

    const deletedUser = await User.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!deletedUser) {
      throw new AppError(StatusCodes.BAD_REQUEST, 'Failed to delete user');
    }

    session.commitTransaction();
    session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to delete student');
    console.log(error);
  }
};

export const studentServices = {
  getAllStudentFromDb,
  deleteStudentFromDB,
};
