import React from 'react';
import { Container, SectionCTA } from './styles/CallToAction.element';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import colors from '../constant/colors';

const CallToAction = () => {
  const history = useHistory();

  return (
    <SectionCTA>
      <Container>
        <div>
          <h2>Dapatkan fitur lainnya!</h2>

          <p>
            Dengan mendaftarkan diri anda, kamu bisa membeli tanaman favoritmu,
            notifikasi pada pesanan, berita terbaru seputar tanaman, dan masih
            banyak lagi!
          </p>

          <Button
            onClick={() => history.push('/register')}
            primary
            cta
            text='Gabung Sekarang'
            bgColor={colors.green}
          />
        </div>

        <div>
          <img src='/images/illustration/cta.svg' alt='cta' />
        </div>
      </Container>
    </SectionCTA>
  );
};

export default CallToAction;
