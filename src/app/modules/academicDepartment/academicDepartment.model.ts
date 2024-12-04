import { model, Schema } from 'mongoose';
import { IAcademicDepartment } from './academicDepartment.interface';

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

export const AcademicDepartment = model<IAcademicDepartment>(
  'academicDepartment',
  academicDepartmentSchema,
);
