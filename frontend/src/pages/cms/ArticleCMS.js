import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import styled from 'styled-components';
import axios from 'axios';

const ArticleCMS = () => {
  const [article, setArticle] = useState({
    article_image: '',
    title: '',
    author: '',
    created_at: '',
    duration: '',
    source: '',
    url: '',
    content: '',
  });

  const postArticle = async (form) => {
    const res = await axios.post('http://localhost:5000/api/articles', form);
    console.log('post', res);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    postArticle(article);
  };

  return (
    <>
      <h1>Artikel CMS</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor='title'>title</label>
        <input
          type='text'
          name='title'
          value={article.title}
          onChange={(e) => setArticle({ ...article, title: e.target.value })}
        />

        <label htmlFor='author'>author</label>
        <input
          type='text'
          name='author'
          value={article.author}
          onChange={(e) => setArticle({ ...article, author: e.target.value })}
        />

        <label htmlFor='created'>created</label>
        <input
          type='text'
          name='created'
          value={article.created_at}
          onChange={(e) =>
            setArticle({ ...article, created_at: e.target.value })
          }
        />

        <label htmlFor='duration'>duration</label>
        <input
          type='text'
          name='duration'
          value={article.duration}
          onChange={(e) => setArticle({ ...article, duration: e.target.value })}
        />

        <label htmlFor='source'>source</label>
        <input
          type='text'
          name='source'
          value={article.source}
          onChange={(e) => setArticle({ ...article, source: e.target.value })}
        />

        <label htmlFor='url'>url</label>
        <input
          type='text'
          name='url'
          value={article.url}
          onChange={(e) => setArticle({ ...article, url: e.target.value })}
        />

        <label htmlFor='image'>image</label>
        <FileBase
          type='file'
          name='image'
          multiple={false}
          onDone={({ base64 }) =>
            setArticle({ ...article, article_image: base64 })
          }
        />

        <label htmlFor='content'>content</label>
        <input
          type='text'
          name='content'
          value={article.content}
          onChange={(e) => setArticle({ ...article, content: e.target.value })}
        />

        <button type='submit'>Submit</button>
      </Form>
    </>
  );
};

const Form = styled.form`
  color: black;

  & > label,
  & > input {
    display: block;
    margin-left: 4rem;
  }
`;

export default ArticleCMS;
