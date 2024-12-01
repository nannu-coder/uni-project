import { Router } from 'express';
import { userRoutes } from '../modules/user/user.routes';
import { academicSemesterRoute } from '../modules/academicSemester/semester.routes';
import { studentRoutes } from '../modules/student/student.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/students',
    route: studentRoutes,
  },
  {
    path: '/academic-semesters',
    route: academicSemesterRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
