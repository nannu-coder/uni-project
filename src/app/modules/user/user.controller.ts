/* eslint-disable @typescript-eslint/no-explicit-any */
import { StatusCodes } from 'http-status-codes';
import { userServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';

const createStudent = catchAsync(async (req, res) => {
  const { password, student } = req.body;

  const result = await userServices.createStudentIntoDB(password, student);

  // res.status(StatusCodes.CREATED).json({
  //   success: true,
  //   message: 'Student created successfully',
  //   data: result,
  // });

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Student created successfully',
    data: result,
  });
});

export const userControllers = {
  createStudent,
};
