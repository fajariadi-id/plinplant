import pool from '../config/db.js';

export const getReviews = (id, callback) => {
  pool.query(
    `Select * from plant_review where fk_plant_id = ?`,
    [id],
    (error, results, fields) => {
      if (error) return callback(error);

      return callback(null, results); // result[0]
    }
  );
};
