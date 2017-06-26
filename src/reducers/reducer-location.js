import { GET_LOCATION } from '../actions/index';


const INIT_STATE = {
    coords: {
    latitude: 0,
    longitude: 0
  }
};

export default function(state = INIT_STATE, action){
  switch(action.type) {
    case GET_LOCATION:
      return  action.payload.data;
    default:
      return state;
  }
  console.log("Action recieved: ", action);
}
