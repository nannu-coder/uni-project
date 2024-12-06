import { z } from 'zod';

const userNameSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .refine((value) => /^[A-Z]/.test(value), {
      message: 'First Name must start with a capital letter',
    }),
  middleName: z.string(),
  lastName: z.string(),
});

const guardianSchema = z.object({
  fathersName: z.string(),
  fathersOccupation: z.string(),
  fathersContactNo: z.string(),
  mothersName: z.string(),
  mothersOccupation: z.string(),
  mothersContactNo: z.string(),
});

const localGuardianSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

export const studentValidationSchema = z.object({
  body: z.object({
    student: z.object({
      name: userNameSchema,
      gender: z.enum(['Male', 'Female', 'Other']),
      dateOfBirth: z.string(),
      email: z.string().email(),
      contactNo: z.string(),
      emergencyContactNo: z.string(),
      presentAddress: z.string(),
      permanentAddress: z.string(),
      guardian: guardianSchema,
      localGuardian: localGuardianSchema,
      profileImg: z.string(),
      addmissionSemester: z.string(),
      isDeleted: z.boolean().default(false),
    }),
  }),
});

const updateUserNameSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .refine((value) => /^[A-Z]/.test(value), {
      message: 'First Name must start with a capital letter',
    })
    .optional(),
  middleName: z.string().optional(),
  lastName: z.string().optional(),
});

const updateGuardianSchema = z.object({
  fathersName: z.string().optional(),
  fathersOccupation: z.string().optional(),
  fathersContactNo: z.string().optional(),
  mothersName: z.string().optional(),
  mothersOccupation: z.string().optional(),
  mothersContactNo: z.string().optional(),
});

const updateLocalGuardianSchema = z.object({
  name: z.string().optional(),
  occupation: z.string().optional(),
  contactNo: z.string().optional(),
  address: z.string().optional(),
});

export const updateStudentValidationSchema = z.object({
  body: z.object({
    student: z.object({
      name: updateUserNameSchema.optional(),
      gender: z.enum(['Male', 'Female', 'Other']).optional(),
      dateOfBirth: z.string().optional(),
      email: z.string().email().optional(),
      contactNo: z.string().optional(),
      emergencyContactNo: z.string().optional(),
      presentAddress: z.string().optional(),
      permanentAddress: z.string().optional(),
      guardian: updateGuardianSchema.optional(),
      localGuardian: updateLocalGuardianSchema.optional(),
      profileImg: z.string().optional(),
      addmissionSemester: z.string().optional(),
      isDeleted: z.boolean().default(false).optional(),
    }),
  }),
});

export const studentValidations = {
  studentValidationSchema,
  updateStudentValidationSchema,
};
