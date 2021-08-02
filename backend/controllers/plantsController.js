import { getPlants, getPlant } from '../services/plantsService.js';

export const plants = (req, res) => {
  getPlants((err, results) => {
    if (err) {
      console.log(err);
      return;
    }

    return res.json({
      success: 1,
      data: results,
    });
  });
};

export const plant = (req, res) => {
  const id = req.params.id;

  getPlant(id, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }

    if (results.length === 0) {
      return res.json({
        success: 0,
        message: 'Record not found',
      });
    }

    return res.json({
      success: 1,
      data: results,
    });
  });
};
