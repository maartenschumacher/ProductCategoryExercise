// @flow strict-local

import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

import type {Product} from '../../types';

type PropsType = {
  products: Array<Product>,
};

export const ProductList = ({products}: PropsType) => {
  return (
    <FlatList
      numColumns={2}
      data={products}
      contentContainerStyle={styles.flatlist}
      keyExtractor={(item) => item.name}
      renderItem={({item}) => (
        <View style={styles.container}>
          <Image
            resizeMode="contain"
            source={{uri: item.image}}
            style={styles.image}
          />
          <Text style={styles.brand}>{item.brand.name}</Text>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{`${item.Price} €`}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  flatlist: {
    paddingLeft: 30,
  },
  container: {
    width: 150,
    marginRight: 10,
  },
  image: {
    borderRadius: 10,
    width: '100%',
    height: 150,
  },
  brand: {
    color: 'grey',
    fontSize: 14,
    marginVertical: 4,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
  },
  price: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
