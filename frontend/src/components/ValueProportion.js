import React from 'react';
import { valueProps } from '../helper/data';
import Cards from './Cards';
import { Container } from './styles/ValueProportion.elemet';

const ValueProportion = () => {
  return (
    <section>
      <Container>
        <h2>Mengapa PlinPlant</h2>

        <div>
          {valueProps.map(({ name, img }, index) => (
            <Cards illustration name={name} img={img} key={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ValueProportion;
