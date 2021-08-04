import pool from '../config/db.js';

export const getArticles = (callback) => {
  pool.query(`select * from table_article`, [], (error, results, fields) => {
    if (error) return callback(error);

    return callback(null, results);
  });
};

export const postArticle = (body, callback) => {
  const sql = `insert into table_article(article_image, title, author, created_at, duration, source, url, content) values(?, ?, ?, ?, ?, ?, ?, ?)`;

  console.log('servi', body);

  const column = [
    body.article_image,
    body.title,
    body.author,
    body.created_at,
    body.duration,
    body.source,
    body.url,
    body.content,
  ];

  pool.query(sql, column, (err, result, fields) => {
    if (err) return callback(err);

    return callback(null, result);
  });
};
