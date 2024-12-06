import { z } from 'zod';
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  months,
} from './semester.constant';

const academicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...AcademicSemesterName] as [string, ...string[]]),
    year: z.string(),
    code: z.enum([...AcademicSemesterCode] as [string, ...string[]]),
    startMonth: z.enum([...months] as [string, ...string[]]),
    endMonth: z.enum([...months] as [string, ...string[]]),
  }),
});

export const academicSemesterValidations = {
  academicSemesterValidationSchema,
};
