// @flow strict-local

import React from 'react';
import {fetchProducts} from '../api';

import type {SubCategory, Product} from '../types';

export const useProducts = (subCategory: ?string): Array<Product> => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const getProducts = async () => {
      try {
        const result = await fetchProducts(subCategory);
        setProducts(result);
      } catch (error) {
        // error handling...
        return [];
      }
    };
    getProducts();
  }, [subCategory]);

  return products;
};
