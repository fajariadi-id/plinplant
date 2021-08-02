import pool from '../config/db.js';

export const getPlants = (callback) => {
  pool.query(`select * from plant_data`, [], (error, results, fields) => {
    if (error) {
      return callback(error);
    }
    return callback(null, results);
  });
};

export const getPlant = (id, callback) => {
  pool.query(
    `select * from plant_data where pk_plant_id = ?`,
    [id],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    }
  );
};
