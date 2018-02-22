import axios from 'axios'
import { setFlash } from './flash';

const cuisineReducer = (state = null, action) => {
  switch (action.type) {
    case 'POST_CUISINE':
      return action.cuisine
  }

  return state;
}

const cuisineURL = "http://localhost:9000/cuisines/"

export const postCuisine = (cuisine) => {
  return function action(dispatch){
    axios.post(cuisineURL, cuisine)
    .then(res => {
      dispatch(setFlash('Cuisine Added!', 'green'))
    })
    .catch( err => {
      console.log(err)
    })
  }
}

export default cuisineReducer;