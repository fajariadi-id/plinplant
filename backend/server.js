import express from 'express';
import dotenv from 'dotenv';
import plantsRouter from './routers/plantsRouter.js';

dotenv.config();

const app = express();

app.use('/api/plants', plantsRouter);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
