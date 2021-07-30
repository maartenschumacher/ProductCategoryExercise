// @flow

import category from './mocks/category.json';
import productList from './mocks/productList.json';

import type {Category, Product} from '../types';

export const fetchCategory = () => {
  return new Promise<Category>((resolve, reject) => {
    setTimeout(() => {
      resolve(category);
    }, 1000);
  });
};

export const fetchProducts = (subCategory: ?string) => {
  return new Promise<Array<Product>>((resolve, reject) => {
    setTimeout(() => {
      resolve(productList);
    }, 1000);
  });
};
