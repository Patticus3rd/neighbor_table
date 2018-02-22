const flash = (state = {}, action) => {
    switch (action.type) {
      case 'SET_FLASH':
        return { message: action.message, color: action.color };
      case 'CLEAR_FLASH':
        return {};
      default:
        return state;
    }
  };

  export const setFlash = (message, color) => {
    return { type: 'SET_FLASH', message, color };
  };
  
  export const clearFlash = () => {
    return { type: 'CLEAR_FLASH' };
  };
  
  
  export default flash;