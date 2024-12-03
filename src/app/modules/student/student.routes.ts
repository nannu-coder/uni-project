import { Router } from 'express';
import { studentControllers } from './student.controllers';

const router = Router();

router.get('/', studentControllers.getAllStudent);

export const studentRoutes = router;
