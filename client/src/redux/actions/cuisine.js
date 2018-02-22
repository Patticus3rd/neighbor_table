const cuisineReducer = (state = null, action) => {
  switch (action.type) {
  case 'GET_CUISINE':
      return action.payload
  }

  return state;
}

export const selectCuisine = (cuisine) => {
  //console.log('a cuisine has been selected', cuisine.style);
  return {
    type: 'CUISINE_SELECTED',
    payload: cuisine
  }
}

export default cuisineReducer;