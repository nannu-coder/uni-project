import { Router } from 'express';
import { academicFacultyControllers } from './academicFaculty.controller';
import validateRequest from '../../middleware/validateRequest';
import { academicFacultyValidate } from './academicFaculty.validation';

const router = Router();

router.post(
  '/create-academic-faculty',
  validateRequest(academicFacultyValidate.academicFacultyValidation),
  academicFacultyControllers.createAcademicFaculty,
);

export const academicFacultyRoutes = router;
