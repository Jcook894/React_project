import { combineReducers } from 'redux';
import SearchReducer from './reducer-search';

const rootReducer = combineReducers({
  search: SearchReducer
});

export default rootReducer;
