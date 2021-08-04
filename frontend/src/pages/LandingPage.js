import React from 'react';
import Header from '../components/Header';
import NavbarLandingPage from '../components/NavbarLandingPage';
import Product from '../components/Product';
import ValueProportion from '../components/ValueProportion';

const LandingPage = () => {
  return (
    <>
      <NavbarLandingPage />
      <Header />
      <main>
        <Product />
        <ValueProportion />
      </main>
    </>
  );
};

export default LandingPage;
