import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { academicSemesterServices } from './semester.services';

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await academicSemesterServices.createAcademicSemester(
    req.body,
  );

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Academic Semester created successfully',
    data: result,
  });
});

const getSingleSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result =
    await academicSemesterServices.getSingleSemesterFrmDB(semesterId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Successfully retrieved Academic Semester',
    data: result,
  });
});

const getAllSemester = catchAsync(async (req, res) => {
  const result = await academicSemesterServices.getAllSemesterFrmDB();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Successfully retrieved Academic Semesters',
    data: result,
  });
});

export const semesterControllers = {
  createAcademicSemester,
  getSingleSemester,
  getAllSemester,
};
