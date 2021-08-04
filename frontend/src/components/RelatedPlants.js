import React from 'react';
import styled from 'styled-components';
import colors from '../constant/colors';
import StyledContainer from '../constant/StyledContainer';
import ProductsContainer from './ProductsContainer';

const RelatedPlants = ({ plants, category }) => {
  return (
    <SectionRP>
      <Container>
        <ProductsContainer related category={category} plants={plants} />
      </Container>
    </SectionRP>
  );
};

const SectionRP = styled.section`
  background-color: ${colors.green};
  padding-bottom: 50px;
`;

const Container = styled(StyledContainer)`
  padding: 0 30px;

  @media (max-width: 760px) {
    padding: 0 50px;
  }
`;

export default RelatedPlants;
