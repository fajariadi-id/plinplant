import React from 'react';
import Header from '../components/Header';
import NavbarLandingPage from '../components/NavbarLandingPage';
import Product from '../components/Product';

const LandingPage = () => {
  return (
    <>
      <NavbarLandingPage />
      <Header />
      <main>
        <Product />
      </main>
    </>
  );
};

export default LandingPage;
