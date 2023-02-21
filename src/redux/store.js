import { createStore } from 'redux';
import reducerCount from './reducers/reducerCount'
export const store = createStore(reducerCount);
