import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import {
  Container,
  ProductSlider,
  SearchBar,
  SectionProduct,
} from './styles/Product.element';
import axios from 'axios';

const Product = () => {
  const [plants, setPlants] = useState([]);

  // const baseUrl = 'https://plinplant-server.herokuapp.com';

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const res = await axios.get(
          'https://plinplant-server.herokuapp.com/api/plants'
        );

        console.log('DATA', res);
      } catch (error) {
        console.log('EROR', error);
      }
    };

    fetchPlants();
  }, []);

  return (
    <SectionProduct>
      <Container>
        <SearchBar>
          <h4>Pertama, mari cari tanaman favoritmu</h4>

          <div>
            <input
              type='text'
              // value={search}
              // onChange={(e) => setSearch(e.target.value)}
              placeholder='Contoh: Aglonema'
            />

            <div>
              <FaSearch />
            </div>
          </div>
        </SearchBar>

        <ProductSlider>
          {/* {productsCategory.map((category, index) => (
            <ProductsContainer slider category={category} key={index} />
          ))} */}
        </ProductSlider>
      </Container>
    </SectionProduct>
  );
};

export default Product;
