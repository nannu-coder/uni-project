import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { studentServices } from './student.services';

const getAllStudent = catchAsync(async (req, res) => {
  const result = await studentServices.getAllStudentFromDb();

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Student Retrieved Successfully',
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentServices.deleteStudentFromDB(studentId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Student is deleted succesfully',
    data: result,
  });
});

export const studentControllers = {
  getAllStudent,
  deleteStudent,
};
