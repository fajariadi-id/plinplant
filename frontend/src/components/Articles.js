import React, { useContext, useEffect, useState } from 'react';
import {
  HeaderComponent,
  Header,
  NewsContainer,
  News,
  Main,
} from './styles/Articles.element';
// import image from '../images/cherrytomatomature.jpg';
import { FaArrowDown, FaCircle } from 'react-icons/fa';
import axios from 'axios';
import ProductsContainer from './ProductsContainer';
// import ProductsContainer from '../../../fajariadi/components/Main/components/Product/ProductsContainer';
// import { articles } from '../../../master/constant/data/dummy-data';
// import ScrollSign from '../../../master/components/additional/ScrollSign';
// import { ContextStore } from '../../../context/store/ContextStore';

const NewsHeader = () => {
  const [scroll, setScroll] = useState(true);
  const [articleIdState, setArticleIdState] = useState([]);

  // const { articleIdState } = useContext(ContextStore);

  useEffect(() => {
    // if (articles.length < 4) setScroll(false);
    // if (articles.length > 3) setScroll(true);
    const fetchArticles = async () => {
      const res = await axios.get('http://localhost:5000/api/articles');
      setArticleIdState(res.data.data);
      console.log('DATA', res.data.data);
    };

    fetchArticles();
  }, []);

  return (
    <Main>
      <News>
        <HeaderComponent>
          <img
            src={`/images/article_image/${articleIdState[0]?.article_image}`}
            alt={articleIdState[0]?.title}
          />

          <Header>
            <h2>{articleIdState[0]?.title}</h2>

            <span>
              Oleh <strong>{articleIdState[0]?.author}</strong>
            </span>

            <p>
              {articleIdState[0]?.created_at}{' '}
              <FaCircle size={7} className='circle' />{' '}
              {articleIdState[0]?.duration}
            </p>

            <p>
              Sumber:{' '}
              <a href={articleIdState[0]?.url} target='_blank'>
                <em>{articleIdState[0]?.source}</em>
              </a>
            </p>

            <p>{articleIdState[0]?.content}</p>
          </Header>
        </HeaderComponent>

        <NewsContainer>
          <h4>Artikel Lain</h4>

          <ProductsContainer article res={articleIdState} />

          {/* {scroll && <ScrollSign center />} */}
        </NewsContainer>
      </News>
    </Main>
  );
};

export default NewsHeader;
