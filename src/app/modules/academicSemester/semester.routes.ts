import express from 'express';
import { semesterControllers } from './semester.controller';

const router = express.Router();

router.post(
  '/create-academic-semester',
  semesterControllers.createAcademicSemester,
);

router.get('/:semesterId', semesterControllers.getSingleSemester);

router.get('/', semesterControllers.getAllSemester);

export const academicSemesterRoute = router;
