import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Shop from '../components/Shop';
import { getPlant, getReviews } from '../context/actions';
import { Context } from '../context/store';

const ShoppingPage = ({ match }) => {
  const { plantDispatch, reviewsDispatch } = useContext(Context);

  useEffect(() => {
    plantDispatch(getPlant(match.params.id));
    reviewsDispatch(getReviews(match.params.id));

    window.scrollTo({ top: 0 });
  }, [match.params.id, plantDispatch]);

  return (
    <>
      <Navbar />
      <Shop />
      <Footer colored />
    </>
  );
};

export default ShoppingPage;
