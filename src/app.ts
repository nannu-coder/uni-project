import express from 'express';
import { userRoutes } from './app/modules/user/user.routes';
import { globalErrorHandler } from './app/middleware/globalErrorHandler';

export const app = express();

// Middleware
app.use(express.json());

// App Routes
app.use('/api/v1/users', userRoutes);

// global Error Handler
app.use(globalErrorHandler);

app.get('/', (req, res) => {
  res.send('App Running');
});
