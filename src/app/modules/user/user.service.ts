import mongoose from 'mongoose';
import config from '../../config';
import AppError from '../../errors/appError';
import { AcademicSemester } from '../academicSemester/semester.model';
import IStudent from '../student/student.interface';
import { Student } from '../student/student.model';
import { IUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utils.generateId';
import { StatusCodes } from 'http-status-codes';

const createStudentIntoDB = async (password: string, payload: IStudent) => {
  const user: Partial<IUser> = {};

  // Academic Semester
  const admissionSemester = await AcademicSemester.findById(
    payload.addmissionSemester,
  );

  if (!admissionSemester) {
    throw new AppError(404, 'Admission semester not found');
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    // set user id manually
    user.id = await generateStudentId(admissionSemester);

    // set password into the user
    user.password = password || (config.password as string);

    // set Role
    user.role = 'student';

    // create a user. //  Transaction-1
    const result = await User.create([user], { session });

    //create a student
    if (!result.length) {
      throw new AppError(StatusCodes.BAD_REQUEST, 'Failed to create user');
    }

    if (Object.keys(result).length > 0) {
      // set id, _id as user
      payload.id = result[0].id;
      payload.user = result[0]._id;

      // create a student (transaction-2)

      const student = await Student.create([payload], { session });

      if (!student.length) {
        throw new AppError(StatusCodes.BAD_REQUEST, 'Failed to create student');
      }

      await session.commitTransaction();
      await session.endSession();

      return student;
    }
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to create student');
    console.log('from user service->', error);
  }
};

export const userServices = {
  createStudentIntoDB,
};
