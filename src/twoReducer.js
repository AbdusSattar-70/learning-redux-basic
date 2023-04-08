const { createStore, combineReducers } = require('redux');

/* for product constants */
const ADD_PRODUCT = 'ADD_PRODUCT';
const GET_PRODUCT = 'GET_PRODUCT';
/* for cart constants */
const ADD_CART = 'ADD_CART';
const GET_CART = 'GET_CART';

/* for product initialState */
const initialProduct = {
  product: ['salt', 'onion'],
  numberOfProducts: 2,
};
/* for cart initialState */
const initialCart = {
  cart: ['potato'],
  numberOfProducts: 1,
};

/* for product actions */
const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

const getProduct = () => ({
  type: GET_PRODUCT,
});

/* for cart actions */
const addCart = (product) => ({
  type: ADD_CART,
  payload: product,
});

const getCart = () => ({
  type: GET_CART,
});

/* for productReducer */
const productReducer = (state = initialProduct, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        product: [...state.product, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    case GET_PRODUCT:
      return {
        state,
      };

    default:
      return state;
  }
};

/* for CartReducer */
const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        cart: [...state.cart, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    case GET_CART:
      return {
        state,
      };

    default:
      return state;
  }
};

const rootReducers = combineReducers({
  productRe: productReducer,
  cartRe: cartReducer,
});

const store = createStore(rootReducers);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProduct());
store.dispatch(addProduct('potato'));
store.dispatch(getCart());
store.dispatch(addCart('shirt'));
