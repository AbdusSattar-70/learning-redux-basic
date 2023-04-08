import counterReducer from '../services/reducers/counterReducer';

const { createStore } = require('redux');

const store = createStore(counterReducer);

export default store;
