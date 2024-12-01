import { IAcademicSemester } from './semester.interface';
import { AcademicSemester } from './semester.model';

const createAcademicSemester = async (payload: IAcademicSemester) => {
  const result = await AcademicSemester.create(payload);

  return result;
};

export const academicSemesterServices = {
  createAcademicSemester,
};
