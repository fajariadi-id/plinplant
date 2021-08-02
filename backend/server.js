import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import plantsRouter from './routers/plantsRouter.js';

dotenv.config();

// app.use(express.json());

const app = express();

app.use(cors());
// app.use(
//   cors({
//     origin: ['http://localhost:3000'],
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true,
//   })
// );
// app.options('*', cors());

app.use('/api/plants', plantsRouter);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
