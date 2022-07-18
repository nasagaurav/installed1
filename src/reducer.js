import {Users,Bookings,Flights} from './data'

const initialState = {
  Users :Users,
  Bookings:Bookings,
  Flights:Flights,
  role:"",
  loggedin:false,
  user:null,




}



function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;
