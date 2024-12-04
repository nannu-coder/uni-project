import { Router } from 'express';
import { academicDepatmentControllers } from './academicDepartment.controller';
import validateRequest from '../../middleware/validateRequest';
import { academicDepartmentValidations } from './academicDepartment.validation';

const router = Router();

router.post(
  '/create-academic-department',
  validateRequest(academicDepartmentValidations.academicDepartmentValidation),
  academicDepatmentControllers.createAcademicDepartment,
);

router.get('/', academicDepatmentControllers.getAllAcademicDepartment);

export const academicDepartmentRoutes = router;
