
const initialState = {
  users :[];
  bookings:[];
  flights:[];
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
