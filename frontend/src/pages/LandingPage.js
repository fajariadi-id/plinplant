import React from 'react';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
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
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
