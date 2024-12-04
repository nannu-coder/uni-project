import { z } from 'zod';

const academicDepartmentValidation = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Name must be string',
      required_error: 'Name is required',
    }),
    academicFaculty: z.string(),
  }),
});

export const academicDepartmentValidations = {
  academicDepartmentValidation,
};
