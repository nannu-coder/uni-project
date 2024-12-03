import { IAcademicSemester } from './semester.interface';
import { AcademicSemester } from './semester.model';

const createAcademicSemester = async (payload: IAcademicSemester) => {
  type TAcademicSemesterNameCoedMapper = {
    [key: string]: string;
  };

  const academicSemesterNameCodeMapper: TAcademicSemesterNameCoedMapper = {
    Autumn: '01',
    Summar: '02',
    Fall: '03',
  };

  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid semester code');
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

const getSingleSemesterFrmDB = async (id: string) => {
  const result = await AcademicSemester.findById(id);
  return result;
};

const getAllSemesterFrmDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};

export const academicSemesterServices = {
  createAcademicSemester,
  getSingleSemesterFrmDB,
  getAllSemesterFrmDB,
};
