import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import {
  Container,
  ProductSlider,
  SearchBar,
  SectionProduct,
} from './styles/Product.element';
import axios from 'axios';
import ProductsContainer from './ProductsContainer';

const api = axios.create({
  baseURL: 'https://plinplant-server.herokuapp.com',
});

const Product = () => {
  const [plants, setPlants] = useState([]);

  // const baseUrl = 'https://plinplant-server.herokuapp.com';

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const res = await api.get('/api/plants');

        setPlants(res.data.data);
      } catch (error) {
        console.log('EROR', error);
      }
    };

    fetchPlants();
  }, []);

  const plantCategory = plants
    .map((plant) => plant.category_name)
    .filter((plant, index, arr) => arr.indexOf(plant) === index);

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
          {plantCategory.map((category, index) => (
            <ProductsContainer
              slider
              res={plants}
              category={category}
              key={index}
            />
          ))}
        </ProductSlider>
      </Container>
    </SectionProduct>
  );
};

export default Product;
