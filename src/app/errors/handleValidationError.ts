import mongoose from 'mongoose';
import { TErrorSourece, TGenericErrorResponse } from '../interface/error';

export const handleValidationError = (
  err: mongoose.Error.ValidationError,
): TGenericErrorResponse => {
  const errorSources: TErrorSourece = Object.values(err.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.ValidatorError) => {
      return {
        path: val?.path,
        message: val?.message,
      };
    },
  );

  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    errorSources,
  };
};
