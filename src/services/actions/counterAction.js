import { INCREMENT, DECREMENT, RESET } from '../constants/counterConstant';

const increment = () => ({
  type: INCREMENT,
});
const decrement = () => ({
  type: DECREMENT,
});
const reset = () => ({
  type: RESET,
});

export { increment, decrement, reset };
