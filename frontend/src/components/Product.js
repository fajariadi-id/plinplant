import React, { useContext, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import {
  Container,
  ProductSlider,
  SearchBar,
  SectionProduct,
} from './styles/Product.element';
import ProductsContainer from './ProductsContainer';
import { Context } from '../context/store';

const Product = () => {
  const [search, setSearch] = useState('');

  const { plantsState } = useContext(Context);

  // :::::::::::::::::::::: SEARCHING FILTER ::::::::::::::::::::::
  const searching = search
    .toLowerCase()
    .split('')
    .filter((item) => item.trim())
    .join('');

  const searchedProduct = plantsState.map((plant) =>
    plant.plant_name
      .toLowerCase()
      .split('')
      .filter((plant) => plant.trim())
      .join('')
  );

  const searched = searchedProduct.map((item) => item.includes(searching));

  const plantSearched = plantsState.filter((plant) =>
    plant.plant_name
      .toLowerCase()
      .split('')
      .filter((plant) => plant.trim())
      .join('')
      .includes(searching)
  );

  // :::::::::::::::::::::: CATEGORY FILTER ::::::::::::::::::::::
  const plantCategory = plantsState
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Contoh: Aglonema'
            />

            <div>
              <FaSearch />
            </div>
          </div>
        </SearchBar>

        <ProductSlider>
          {search ? (
            <>
              {searched.includes(true) ? (
                <ProductsContainer search={search} plants={plantSearched} />
              ) : (
                <p style={{ textAlign: 'center' }}>
                  Mohon maaf, tanaman yang Anda cari belum tersedia.
                </p>
              )}
            </>
          ) : (
            <>
              {plantCategory.map((category, index) => (
                <ProductsContainer
                  slider
                  plants={plantsState}
                  category={category}
                  key={index}
                />
              ))}
            </>
          )}
        </ProductSlider>
      </Container>
    </SectionProduct>
  );
};

export default Product;
