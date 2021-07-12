import React from 'react';
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
  return (
    <Nav>
      <Container>
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
