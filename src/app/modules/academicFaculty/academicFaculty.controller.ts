import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { IAcademicFaculty } from './academicFaculty.interface';
import { academicFacultyServices } from './academicFaculty.service';

const createAcademicFaculty = catchAsync(async (req, res) => {
  const faculty: IAcademicFaculty = req.body;

  const result =
    await academicFacultyServices.createAcademicFacultyIntoDB(faculty);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Academic Faculty created successfully',
    data: result,
  });
});

export const academicFacultyControllers = {
  createAcademicFaculty,
};
