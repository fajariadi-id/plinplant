// MongoDB
// import mongoose from 'mongoose';

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//       useCreateIndex: true,
//     });

//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.log(`Error: ${error.message}`);
//     process.exit(1);
//   }
// };

// export default connectDB;

// mysql
import { createPool } from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const pool = createPool({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.MYSQL_DB,
  connectionLimit: 10,
});

export default pool;
