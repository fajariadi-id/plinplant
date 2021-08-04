import React, { useEffect } from 'react';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import HeaderLanding from '../components/HeaderLanding';
import NavbarLandingPage from '../components/NavbarLandingPage';
import Product from '../components/Product';
import ValueProportion from '../components/ValueProportion';

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <NavbarLandingPage />
      <HeaderLanding />
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
