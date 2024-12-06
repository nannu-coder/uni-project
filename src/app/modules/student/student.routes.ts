import { Router } from 'express';
import { studentControllers } from './student.controllers';
import validateRequest from '../../middleware/validateRequest';
import { studentValidations } from './student.validation';

const router = Router();

router.get('/', studentControllers.getAllStudent);
router.delete(
  '/:studentId',
  validateRequest(studentValidations.updateStudentValidationSchema),
  studentControllers.deleteStudent,
);

export const studentRoutes = router;
