import express from 'express';
import { semesterControllers } from './semester.controller';

const router = express.Router();

router.post(
  '/create-academic-semester',
  semesterControllers.createAcademicSemester,
);

export const academicSemesterRoute = router;
