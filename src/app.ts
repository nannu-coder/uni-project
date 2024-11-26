import express from 'express';
const port = 3000;

export const app = express();

// Middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('App Running');
});
