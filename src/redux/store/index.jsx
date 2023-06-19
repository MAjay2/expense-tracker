import { createStore } from 'redux';
import expenseReducer from '../reducers/expense';

const store = createStore(expenseReducer);

export default store;
