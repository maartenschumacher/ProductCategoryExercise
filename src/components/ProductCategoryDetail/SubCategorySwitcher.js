// @flow strict-local

import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';

import type {SubCategory} from '../../types';

type PropsType = {
  subCategories: Array<SubCategory>,
  selectedSubCategory: ?string,
  setSelectedSubCategory: (?string) => void,
};

export const SubCategorySwitcher = ({
  subCategories,
  selectedSubCategory,
  setSelectedSubCategory,
}: PropsType) => {
  return (
    <ScrollView horizontal style={styles.scrollView}>
      {subCategories.map((subCategory) => {
        const isSelected = subCategory.id === selectedSubCategory;
        return (
          <TouchableOpacity
            key={subCategory.id}
            style={[styles.button, isSelected ? styles.selectedButton : null]}
            onPress={() => setSelectedSubCategory(subCategory.id)}>
            <Text
              style={[styles.title, isSelected ? styles.selectedTitle : null]}>
              {subCategory.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingLeft: 30,
    flexGrow: 0,
    marginBottom: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 10,
  },
  selectedTitle: {
    color: 'white',
  },
  button: {
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    backgroundColor: 'lightgrey',
  },
  selectedButton: {
    backgroundColor: 'lightblue',
  },
});
