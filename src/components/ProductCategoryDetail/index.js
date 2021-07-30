// @flow strict-local

import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {Header} from './Header';
import {SubCategorySwitcher} from './SubCategorySwitcher';
import {ProductList} from './ProductList';

import {useCategory, useProducts} from '../../hooks';

export const ProductCategoryDetail = () => {
  const [selectedSubCategory, setSelectedSubCategory] =
    React.useState<?string>(null);

  const category = useCategory();
  const products = useProducts(selectedSubCategory);

  return category ? (
    <>
      <Header name={category.name} image={category.image} />
      <SubCategorySwitcher
        subCategories={category.subCategories}
        selectedSubCategory={selectedSubCategory}
        setSelectedSubCategory={setSelectedSubCategory}
      />
      <ProductList products={products} />
    </>
  ) : (
    <ActivityIndicator style={styles.loader} />
  );
};

const styles = StyleSheet.create({
  loader: {
    marginTop: 100,
  },
});
