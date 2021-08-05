import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

import plantsRouter from './routers/plantsRouter.js';
import reviewsRouter from './routers/reviewsRouter.js';
import articlesRouter from './routers/articlesRouter.js';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json({ limit: '10mb', extended: true }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use('/api/plants', plantsRouter);
app.use('/api/reviews', reviewsRouter);
app.use('/api/articles', articlesRouter);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
