import React, { useContext } from 'react';
import {
  Container,
  Left,
  Right,
  Box,
  BoxGroup,
  StyledHeader,
} from './styles/HeaderEncy.element';
import { FaSeedling, FaClock, FaPagelines } from 'react-icons/fa';
import { Context } from '../context/store';

const HeaderEncyclopedia = () => {
  const { plantState } = useContext(Context);
  const {
    plant_name,
    plant_image,
    plant_origin,
    plant_qualities,
    plant_use,
    days_to_sprout,
    matures_in,
    growth_type,
  } = plantState;

  return (
    <StyledHeader>
      <Container>
        <Left>
          <img src={`/images/Plant/${plant_image}`} alt={plant_name} />
        </Left>

        <Right>
          <h1>{plant_name}</h1>
          <h5>Asal Tanaman</h5>
          <p>{plant_origin}</p>

          <h5>Kualitas</h5>
          <p>{plant_qualities}</p>

          <h5>Kegunaan</h5>
          <p>{plant_use}</p>
        </Right>

        <BoxGroup>
          <Box>
            <div>
              <FaSeedling className='icon' />
            </div>
            <p>WAKTU TUMBUH</p>
            <h4>{days_to_sprout} HARI</h4>
          </Box>

          <Box>
            <div>
              <FaClock className='icon' />
            </div>
            <p>DEWASA DALAM</p>
            <h4>{matures_in} HARI</h4>
          </Box>

          <Box>
            <div>
              <FaPagelines className='icon' />
            </div>
            <p>TIPE PERTUMBUHAN</p>
            <h4>{growth_type}</h4>
          </Box>
        </BoxGroup>
      </Container>
    </StyledHeader>
  );
};

export default HeaderEncyclopedia;
