import { SEARCH } from '../actions/index';


export default function reducer(state = [], action) {
  switch(action.type) {
    case SEARCH:
    console.log("Action Received: " + action);
       return [action.payload.data, ...state ];
    }

      return state;

}
