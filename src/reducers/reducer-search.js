import { SEARCH } from '../actions/index';


export default function reducer(state = [], action) {
  switch(action.type) {
    case SEARCH: {
       return {...state,};
      console.log('search' + state);
    }
    default:
      return state;
      console.log('default' + state);
  }
}
