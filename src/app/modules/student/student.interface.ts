import { Types } from 'mongoose';

export interface IGuardian {
  fathersName: string;
  fathersOccupation: string;
  fathersContactNo: string;
  mothersName: string;
  mothersOccupation: string;
  mothersContactNo: string;
}

export interface ILocalGuardian {
  name: string;
  occupation: string;
  contactNo: string;
}

export interface IUserName {
  firstName: string;
  middleName?: string;
  lastName: string;
}

interface IStudent {
  id: string;
  user: Types.ObjectId;
  name: IUserName;
  gender: string;
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: IGuardian;
  localGuardian: ILocalGuardian;
  profileImage: string;
  addmissionSemester: string;
  isDeleted: boolean;
}

export default IStudent;
