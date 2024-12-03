import { z } from 'zod';

const academicFacultyValidation = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Name must be string',
    }),
  }),
});

export const academicFacultyValidate = {
  academicFacultyValidation,
};
