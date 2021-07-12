import React from 'react';
import {
  Container,
  HeaderTag,
  ScrollBtn,
  Typography,
} from './styles/Header.element';
import {} from '../';
import { FaChevronDown } from 'react-icons/fa';

const Header = () => {
  return (
    <HeaderTag>
      <Container>
        <img src='/images/header-pic-small.jpg' alt='header-pic-small' />

        <img src='/images/header-pic-large.jpg' alt='header-pic-large' />

        <Typography>
          <h1>Menanam tanaman menjadi lebih mudah</h1>

          <p>
            PlinPlant membantu Anda menemukan tanaman terbaik untuk ruang Anda,
            mengirimkannya ke pintu Anda dan membantu Anda merawatnya.
          </p>

          <ScrollBtn>
            <div>
              <FaChevronDown className='icon' />
            </div>

            <p>Scroll ke bawah</p>
          </ScrollBtn>
        </Typography>
      </Container>
    </HeaderTag>
  );
};

export default Header;
