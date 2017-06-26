import { combineReducers } from 'redux';
import LocationReducer from './reducer-location';

const rootReducer = combineReducers({
 location: LocationReducer
});

export default rootReducer;
