import { model, Schema } from 'mongoose';
import { IAcademicSemester } from './semester.interface';
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  months,
} from './semester.constant';

const academicSemesterSchema = new Schema<IAcademicSemester>({
  name: {
    type: String,
    enum: AcademicSemesterName,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    enum: AcademicSemesterCode,
    required: true,
  },
  startMonth: {
    type: String,
    required: true,
    enum: months,
  },
  endMonth: {
    type: String,
    required: true,
    enum: months,
  },
});

academicSemesterSchema.pre('save', async function (next) {
  const isSemesterExists = await AcademicSemester.findOne({
    name: this.name,
    year: this.year,
  });

  if (isSemesterExists) {
    throw new Error(
      'Academic semester with the same name and year already exists.',
    );
  }
  next();
});

export const AcademicSemester = model<IAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);
