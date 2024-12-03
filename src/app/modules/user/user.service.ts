import config from '../../config';
import { AcademicSemester } from '../academicSemester/semester.model';
import IStudent from '../student/student.interface';
import { Student } from '../student/student.model';
import { IUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utils.generateId';

const createStudentIntoDB = async (password: string, payload: IStudent) => {
  const user: Partial<IUser> = {};

  // Academic Semester
  const admissionSemester = await AcademicSemester.findById(
    payload.addmissionSemester,
  );

  if (!admissionSemester) {
    throw new Error('Admission semester not found');
  }

  // set user id manually
  user.id = await generateStudentId(admissionSemester);

  // set password into the user
  user.password = password || (config.password as string);

  // set Role
  user.role = 'student';

  const result = await User.create(user);

  if (Object.keys(result).length > 0) {
    // set id, _id as user
    payload.id = result.id;
    payload.user = result._id;

    const student = await Student.create(payload);
    return student;
  }
};

export const userServices = {
  createStudentIntoDB,
};
