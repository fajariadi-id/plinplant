import React from 'react';
import { FaSearch } from 'react-icons/fa';
import {
  Container,
  ProductSlider,
  SearchBar,
  SectionProduct,
} from './styles/Product.element';

const Product = () => {
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
