import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaShoppingCart } from 'react-icons/fa';
import colors from '../constant/colors';
import Button from './Button';
import {
  Container,
  Home,
  LinksContainer,
  Logo,
  Nav,
} from './styles/Navbar.element';

const Navbar = () => {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    // ::: NAVBAR INTERACTION :::
    const scrollNav = () => {
      const navbarHeight = 100;
      window.pageYOffset > navbarHeight ? setShadow(true) : setShadow(false);
    };

    window.addEventListener('scroll', scrollNav);

    return () => {
      window.removeEventListener('scroll', scrollNav);
    };
    // ::: END OF NAVBAR INTERACTION :::
  }, []);

  return (
    <Nav shadow={shadow}>
      <Container shadow={shadow}>
        <Home to='/'>
          <FaChevronLeft className='icon' />
          <p>Halaman Utama</p>
        </Home>

        <Logo className='logo-center'>PlinPlant</Logo>

        <LinksContainer>
          <li>
            <FaShoppingCart className='cart' />
          </li>
          <li>Artikel</li>
          <li>
            <Button
              text='Masuk'
              bgColor={colors.white}
              onClick={() => console.log('Masuk')}
            />
            <Button
              primary
              text='Daftar'
              bgColor={colors.lightGreenTransparent}
              onClick={() => console.log('Daftar')}
            />
          </li>
        </LinksContainer>
      </Container>
    </Nav>
  );
};

export default Navbar;
