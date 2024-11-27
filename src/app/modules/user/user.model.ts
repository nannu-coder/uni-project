import { Schema, model } from 'mongoose';
import { IUser } from './user.interface';

const userSchema = new Schema<IUser>({
  id: {
    type: String,
    required: [true, 'Id Field is required'],
  },
  password: {
    type: String,
    minlength: 6,
  },
  needsPasswordChange: {
    type: Boolean,
    required: true,
    default: true,
  },
  role: {
    type: String,
    required: true,
    enum: {
      values: ['admin', 'faculty', 'student'],
      message: 'Please select a role',
    },
  },
  status: {
    type: String,
    enum: ['in-progress', 'blocked'],
    required: true,
    default: 'in-progress',
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const User = model('User', userSchema);
