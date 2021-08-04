import React from 'react';
import { Link } from 'react-router-dom';
import colors from '../constant/colors';
import slug from '../constant/slug';
import Button from './Button';
import { Container, SectionCTAE } from './styles/CTAEncyclopedia.element';

const CTAEncyclopedia = ({ id, name }) => {
  return (
    <SectionCTAE>
      <Container>
        <div>
          <h2>Tertarik untuk membeli {name}?</h2>
          <p>
            Bagaimana pengalaman kamu melihat pertumbuhan tanaman {name} ini?
            Apakah kamu tertarik untuk merawatnya? Yuk, klik tombol Beli
            Sekarang dan nantikan tanaman ini sampai kerumahmu.
          </p>
        </div>

        <Link to={`/shop/${id}/${slug(name)}`}>
          <Button primary cta text='Beli Sekarang!' bgColor={colors.yellow} />
        </Link>
      </Container>
    </SectionCTAE>
  );
};

export default CTAEncyclopedia;
