import { SET_MESSAGE } from '../types/style';
export function selectCuisine(cuisine) {
  //console.log('a cuisine has been selected', cuisine.style);
  return {
    type: 'CUISINE_SELECTED',
    payload: cuisine
  }
}