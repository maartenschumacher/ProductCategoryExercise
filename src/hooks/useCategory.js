// @flow strict-local

import React from 'react';
import {fetchCategory} from '../api';

import type {Category} from '../types';

export const useCategory = (): ?Category => {
  const [category, setCategory] = React.useState(null);

  React.useEffect(() => {
    const getCategory = async () => {
      try {
        const result = await fetchCategory();
        setCategory(result);
      } catch (error) {
        // error handling...
        return null;
      }
    };
    getCategory();
  }, []);

  return category;
};
