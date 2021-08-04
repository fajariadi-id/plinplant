import { getArticles, postArticle } from '../services/articlesService.js';

export const articles = (req, res) => {
  getArticles((err, results) => {
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

export const articleInput = (req, res) => {
  const body = req.body;
  console.log('BODY', body);

  postArticle(body, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    if (result.length === 0) {
      return res.json({
        success: 0,
        message: 'form cannot be empty',
        data: result,
      });
    }

    return res.json({
      status: 1,
      message: 'Input Article Data Success',
      data: result,
    });
  });
};
