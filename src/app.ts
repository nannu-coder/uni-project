import express from 'express';
import { globalErrorHandler } from './app/middleware/globalErrorHandler';
import { notFoundMiddleware } from './app/middleware/notFound';
import router from './app/routes';

export const app = express();

// Middleware
app.use(express.json());

// App Routes
app.use('/api/v1', router);

// global Error Handler
app.use(globalErrorHandler);

//Not Found Middleware
app.use('*', notFoundMiddleware);

app.get('/', (req, res) => {
  res.send('App Running');
});
