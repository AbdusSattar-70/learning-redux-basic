// install redux and import createStore from it.
const { createStore } = require('redux');
/* 1. defining constants to avoid spelling mistakes */
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';
const RESET = 'RESET';

/* 2. declare initial state, it is a object that can takes any numbers of key:value */
const initialCounter = {
  count: 1,
  users: ['sattar'],
};

/* ===================================================
3. declare actions CRUD or any those will be sepated function
and it can contain one object(props:type and payload)
 it can take arg if needed like payload
===================================================== */

const incrementCounter = () => ({
  type: INCREMENT,
});

const decrementCounter = () => ({
  type: DECREMENT,
});

const addUser = (users) => ({
  type: ADD_USER,
  payload: users,
});

const resetCounter = () => ({
  type: RESET,
});

/* =======================================================
4. create reducer function, it receive two args-> initialstate and
action function,and update state based on the action types
======================================================= */
const countReducer = (state = initialCounter, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case RESET:
      return {
        ...state,
        count: 0,
        users: 0,
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
        count: state.count + 1,
      };
    default:
      return state;
  }
};

/* =======================================================
create store, can receive two function -> reducer(without call) and midlewire
createStore give us three method -> getState(),subscribe() and dispatch()
========================================================= */

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

/* dispatch action  means call the action function inside dispatch() */

store.dispatch(decrementCounter());
store.dispatch(addUser('sattar2'));
store.dispatch(incrementCounter());
store.dispatch(resetCounter());
