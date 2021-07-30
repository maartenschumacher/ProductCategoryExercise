// @flow strict

import type {SubCategory} from './SubCategory';

export type Category = {
  name: string,
  image: string,
  subCategories: Array<SubCategory>,
};
