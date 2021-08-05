import React, { useContext, useState } from 'react';
import colors from '../constant/colors';
import {
  ButtonCart,
  ButtonInfo,
  Container,
  Image,
  Product,
  ProductHighlight,
  RelatedProduct,
  ReviewContainer,
  Info,
} from './styles/Shop.element';
import { FaCartPlus, FaInfoCircle, FaStar } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import ProductsContainer from './ProductsContainer';
import { Context } from '../context/store';
import { useMediaQuery } from 'react-responsive';
import slug from '../constant/slug';
import priceFormat from '../constant/priceFormat';
import Quantity from './Quantity';

const Shop = () => {
  // ::: HIGHLIGHT PRODUCT :::
  const [highlight, setHighlight] = useState('Biji');

  // ::: QUANTITIY EACH PHASE :::
  const [seedQuantity, setSeedQuantity] = useState(1);
  const [tuberQuantity, setTuberQuantity] = useState(1);
  const [youngQuantity, setYoungQuantity] = useState(1);
  const [matureQuantity, setMatureQuantity] = useState(1);

  const { plantsState, plantState } = useContext(Context);
  const {
    pk_plant_id,
    plant_name,
    seed_image,
    tuber_image,
    young_image,
    mature_image,
    seed_price,
    tuber_price,
    teen_price,
    mature_price,
    seed_stock,
    tuber_stock,
    teen_stock,
    mature_stock,
    seed_weight,
    tuber_weight,
    young_weight,
    mature_weight,
  } = plantState;

  const isIpad = useMediaQuery({ maxWidth: 900 });
  const isPhone = useMediaQuery({ maxWidth: 576 });

  // const rate = plantReviewState
  //   .map((review) => review.rating)
  //   .reduce((a, b) => a + b, 0);

  // const ratingAvg = rate === 0 ? 0 : rate / plantReviewState.length;

  return (
    <main
      style={{
        backgroundColor: colors.green,
        minHeight: '100vh',
        paddingTop: 130,
      }}
    >
      <Container>
        <RelatedProduct isIpad={isIpad}>
          {isIpad ? (
            <ProductsContainer
              related
              category={plantState.category_name}
              plants={plantsState}
            />
          ) : (
            <>
              <h5>Tanaman Terkait</h5>
              <ProductsContainer
                scroll
                category={plantState.category_name}
                plants={plantsState}
              />
            </>
          )}

          {/* <ScrollSign center /> */}
        </RelatedProduct>

        <Product>
          <div>
            <Info>
              <Link to={`/ensiklopedia/${pk_plant_id}/${slug(plant_name)}`}>
                <ButtonInfo>Ensiklopedia</ButtonInfo>
              </Link>

              <FaInfoCircle size={20} className='info-icon' />
            </Info>

            <ProductHighlight>
              <div>
                <>
                  {highlight === 'Biji' && (
                    <>
                      <img
                        src={`/images/Plant/${seed_image}`}
                        alt={plant_name}
                      />

                      <Quantity
                        shop
                        quantity={seedQuantity}
                        setQuantity={setSeedQuantity}
                      />
                    </>
                  )}

                  {highlight === 'Bonggol' && (
                    <>
                      <img
                        src={`/images/Plant/${tuber_image}`}
                        alt={plant_name}
                      />

                      <Quantity
                        shop
                        quantity={tuberQuantity}
                        setQuantity={setTuberQuantity}
                      />
                    </>
                  )}

                  {highlight === 'Muda' && (
                    <>
                      <img
                        src={`/images/Plant/${young_image}`}
                        alt={plant_name}
                      />

                      <Quantity
                        shop
                        quantity={youngQuantity}
                        setQuantity={setYoungQuantity}
                      />
                    </>
                  )}

                  {highlight === 'Dewasa' && (
                    <>
                      <img
                        src={`/images/Plant/${mature_image}`}
                        alt={plant_name}
                      />

                      <Quantity
                        shop
                        quantity={matureQuantity}
                        setQuantity={setMatureQuantity}
                      />
                    </>
                  )}
                </>
              </div>

              <div>
                <h4>{plant_name}</h4>

                <div>
                  <span>
                    <FaStar className='star' />{' '}
                    {/* {ratingAvg === 0 ? 0 : ratingAvg.toFixed(1)} */}0
                  </span>

                  {highlight === 'Biji' && (
                    <h5>{priceFormat.format(seed_price)}</h5>
                  )}
                  {highlight === 'Bonggol' && (
                    <h5>{priceFormat.format(tuber_price)}</h5>
                  )}
                  {highlight === 'Muda' && (
                    <h5>{priceFormat.format(teen_price)}</h5>
                  )}
                  {highlight === 'Dewasa' && (
                    <h5>{priceFormat.format(mature_price)}</h5>
                  )}

                  {/* {highlight === 'Biji' && <span>Stok {seed_stock}</span>} */}
                  {/* {highlight === 'Bonggol' && <span>Stok {tuber_stock}</span>} */}
                  {/* {highlight === 'Muda' && <span>Stok {teen_stock}</span>} */}
                  {/* {highlight === 'Dewasa' && <span>Stok {mature_stock}</span>} */}
                </div>

                <p>
                  Kamu sedang melihat fase {highlight} dari tanaman {plant_name}
                </p>

                {highlight === 'Biji' && (
                  <p>
                    Subtotal:
                    <br />
                    <strong>
                      {priceFormat.format(seed_price * seedQuantity)}
                    </strong>
                  </p>
                )}
                {highlight === 'Bonggol' && (
                  <p>
                    Subtotal:
                    <br />
                    <strong>
                      {priceFormat.format(tuber_price * tuberQuantity)}
                    </strong>
                  </p>
                )}
                {highlight === 'Muda' && (
                  <p>
                    Subtotal:
                    <br />
                    <strong>
                      {priceFormat.format(teen_price * youngQuantity)}
                    </strong>
                  </p>
                )}
                {highlight === 'Dewasa' && (
                  <p>
                    Subtotal:
                    <br />
                    <strong>
                      {priceFormat.format(mature_price * matureQuantity)}
                    </strong>
                  </p>
                )}

                <ButtonCart onClick={() => console.log('tambah')}>
                  <FaCartPlus className='cart' /> Tambah ke Keranjang
                </ButtonCart>
              </div>
            </ProductHighlight>
          </div>

          <div>
            <div
              onClick={() => {
                isPhone
                  ? setTimeout(() => {
                      setHighlight('Biji');
                    }, 500)
                  : setHighlight('Biji');

                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <Image
                src={`/images/Plant/${seed_image}`}
                alt={plant_name}
                active={'Biji'}
                highlight={highlight}
              />
              <h6>Biji</h6>
            </div>

            <div
              onClick={() => {
                isPhone
                  ? setTimeout(() => {
                      setHighlight('Bonggol');
                    }, 500)
                  : setHighlight('Bonggol');

                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <Image
                src={`/images/Plant/${tuber_image}`}
                alt={plant_name}
                active={'Bonggol'}
                highlight={highlight}
              />
              <h6>Bonggol</h6>
            </div>

            <div
              onClick={() => {
                isPhone
                  ? setTimeout(() => {
                      setHighlight('Muda');
                    }, 500)
                  : setHighlight('Muda');

                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <Image
                src={`/images/Plant/${young_image}`}
                alt={plant_name}
                active={'Muda'}
                highlight={highlight}
              />
              <h6>Muda</h6>
            </div>

            <div
              onClick={() => {
                isPhone
                  ? setTimeout(() => {
                      setHighlight('Dewasa');
                    }, 500)
                  : setHighlight('Dewasa');

                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <Image
                src={`/images/Plant/${mature_image}`}
                alt={plant_name}
                active={'Dewasa'}
                highlight={highlight}
              />
              <h6>Dewasa</h6>
            </div>
          </div>
        </Product>

        <ReviewContainer>
          <h5>Ulasan</h5>
          {/* {plantReviewState.length === 0 ? (
            <p>
              Ayo, jadi orang pertama yang memberikan ulasan untuk tanaman
              favoritmu!
            </p>
          ) : (
            <ProductsContainer review />
          )} */}
          <p>
            Ayo, jadi orang pertama yang memberikan ulasan untuk tanaman
            favoritmu!
          </p>

          {/* {scroll && <ScrollSign center />} */}
        </ReviewContainer>

        {/* {userLoginState ? (
          <AlertSign
            text='Berhasil menambahkan tanaman kedalam keranjang.'
            notif={notif}
          />
        ) : (
          <AlertSign
            warning
            text='Silahkan log in terlebih dahulu. Mengarahkan ke halaman log in.'
            notif={notif}
          />
        )} */}
      </Container>
    </main>
  );
};

export default Shop;
