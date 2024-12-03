import { Student } from './student.model';

const getAllStudentFromDb = async () => {
  const result = await Student.find();
  return result;
};

export const studentServices = {
  getAllStudentFromDb,
};
