import { getReviews } from '../services/reviewsService.js';

export const reviews = (req, res) => {
  const id = req.params.id;

  getReviews(id, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }

    return res.status(200).json({
      success: 1,
      data: results,
    });
  });
};
