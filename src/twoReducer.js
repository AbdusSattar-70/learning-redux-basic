const { createStore } = require('redux');

const ADD_PRODUCT = 'ADD_PRODUCT';
const GET_PRODUCT = 'GET_PRODUCT';

const initialState = {
  product: ['salt', 'onion'],
  count: 2,
};

const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

const getProduct = () => ({
  type: GET_PRODUCT,
});

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        product: [...state.product, action.payload],
        count: state.count + 1,
      };

    case GET_PRODUCT:
      return {
        state,
      };

    default:
      return state;
  }
};

const store = createStore(productReducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(addProduct('sattar'));
store.dispatch(getProduct());
