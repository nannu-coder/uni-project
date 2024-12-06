import { model, Schema } from 'mongoose';
import { IAcademicDepartment } from './academicDepartment.interface';
import AppError from '../../errors/appError';
import { StatusCodes } from 'http-status-codes';

const academicDepartmentSchema = new Schema<IAcademicDepartment>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
      required: [true, 'AcademicFaculty is required'],
    },
  },
  {
    timestamps: true,
  },
);

// academicDepartmentSchema.pre('save', async function (next) {
//   const departmentAlreadyExists = await AcademicDepartment.findOne({
//     name: this.name,
//   });

//   if (departmentAlreadyExists) {
//     throw new AppError(StatusCodes.BAD_REQUEST, 'Department already exists');
//   }
//   next();
// });

export const AcademicDepartment = model<IAcademicDepartment>(
  'academicDepartment',
  academicDepartmentSchema,
);
