import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { increment, decrement, reset } from '../services/actions/counterAction';

const Home = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increment());
  };
  const handleDecrease = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <section style={{ margin: '6rem 25rem' }}>
      <h1 style={{ fontSize: '3rem' }}>Redux Counter App!</h1>
      <h2 style={{ fontSize: '3rem' }}>{count}</h2>
      <button style={{ fontSize: '1rem' }} type="button" onClick={handleIncrease}>INCREASE</button>
      {' '}
      <button style={{ fontSize: '1rem' }} type="button" onClick={handleDecrease}>DECREASE</button>
      {' '}
      <button style={{ fontSize: '1rem' }} type="button" onClick={handleReset}>RESET</button>
    </section>
  );
};

export default Home;
