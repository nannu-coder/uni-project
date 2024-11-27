import { Schema, model } from 'mongoose';
import IStudent, {
  IGuardian,
  ILocalGuardian,
  IUserName,
} from './student.interface';

const userNameSchema = new Schema<IUserName>({
  firstName: {
    type: String,
    required: [true, 'FirstName is required'],
    trim: true,
    maxlength: [20, 'FirstName can not exceed 20 characters'],
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'LastName is required'],
    trim: true,
    maxlength: [20, 'LastName can not exceed 20 characters'],
  },
});

const guardianSchema = new Schema<IGuardian>({
  fathersName: {
    type: String,
    required: true,
    trim: true,
  },
  fathersOccupation: {
    type: String,
  },
  fathersContactNo: {
    type: String,
    required: [true, 'Fathers Contact No is required'],
  },
  mothersName: {
    type: String,
    required: [true, 'Mothers Name is required'],
    trim: true,
  },
  mothersOccupation: {
    type: String,
  },
  mothersContactNo: {
    type: String,
  },
});

const localGuardianSchema = new Schema<ILocalGuardian>({
  name: {
    type: String,
    required: [true, 'Local guardian name is required'],
    trim: true,
  },
  occupation: {
    type: String,
    required: [true, 'Occupation name is required'],
  },
  contactNo: {
    type: String,
    required: [true, 'Contact is required'],
  },
});

const studentSchema = new Schema<IStudent>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  name: {
    type: userNameSchema,
    required: [true, 'Name is required'],
  },
  gender: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: [true, 'Date of Birth is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
  },
  contactNo: {
    type: String,
    required: [true, 'Contact No is required'],
    unique: true,
  },
  emergencyContactNo: {
    type: String,
  },
  presentAddress: {
    type: String,
    required: [true, 'Present Address is required'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent Address is required'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian is required'],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local Guardian is required'],
  },
  profileImage: {
    type: String,
    required: [true, 'Profile Image is required'],
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const Student = model<IStudent>('Student', studentSchema);
