import config from '../../config';
import IStudent from '../student/student.interface';
import { Student } from '../student/student.model';
import { IUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: IStudent) => {
  const user: Partial<IUser> = {};

  // set user id manually
  user.id = '2024100002';

  // set password into the user
  user.password = password || (config.password as string);

  // set Role
  user.role = 'student';

  const result = await User.create(user);

  if (Object.keys(result).length > 0) {
    // set id, _id as user
    studentData.id = result.id;
    studentData.user = result._id;

    const student = await Student.create(studentData);
    return student;
  }
};

export const userServices = {
  createStudentIntoDB,
};
