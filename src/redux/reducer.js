const initialState = {
  filters: [],
  tags: [],
  products: [],
  loggedin:false,
  user:null,
};

function reducer(state = initialState, action) {
  console.log('reducer', action);
  switch (action.type) {
    case 'getAllProducts':
      return { ...state, products: action.payload };
    case 'getAllTags':
      return { ...state, tags: action.payload };
    case 'getAllFilter':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}
export default reducer;
