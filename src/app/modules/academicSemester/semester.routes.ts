import express from 'express';
import { semesterControllers } from './semester.controller';
import validateRequest from '../../middleware/validateRequest';
import { academicSemesterValidations } from './semester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(academicSemesterValidations.academicSemesterValidationSchema),
  semesterControllers.createAcademicSemester,
);

router.get('/:semesterId', semesterControllers.getSingleSemester);

router.get('/', semesterControllers.getAllSemester);

export const academicSemesterRoute = router;
