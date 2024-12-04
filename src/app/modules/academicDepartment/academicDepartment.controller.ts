import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { academicDepartmentService } from './academicDepartment.service';

const createAcademicDepartment = catchAsync(async (req, res) => {
  const academicDepartmentData = req.body;
  const result = await academicDepartmentService.createAcademicDepartmentIntoDB(
    academicDepartmentData,
  );

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Academic department created successfully',
    data: result,
  });
});

const getAllAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await academicDepartmentService.getAllAcademicDepartmentFromDB();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Academic department retrived successfully',
    data: result,
  });
});

export const academicDepatmentControllers = {
  createAcademicDepartment,
  getAllAcademicDepartment,
};
