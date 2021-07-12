import React from 'react';
import colors from '../constant/colors';
import { Container, LinksContainer, Logo, Nav } from './styles/Navbar.element';
import { FaShoppingCart } from 'react-icons/fa';
import Button from './Button';

const NavbarLandingPage = () => {
  return (
    <Nav>
      <Container>
        <Logo>PlinPlant</Logo>

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

export default NavbarLandingPage;
