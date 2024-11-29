/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { userServices } from './user.service';
import sendResponse from '../../utils/sendResponse';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

export const userControllers = {
  createStudent,
};
