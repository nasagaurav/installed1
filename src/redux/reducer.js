const initialState = {
  filters:[],
  tags:[],
  Products:[],
  }};

function reducer(state = initialState, action) {
  console.log('reducer', action);
  switch (action.type) {
    case 'getAllProducts':
      return { ...state, products: action.payload };
    case 'getAllTags':
      return { ...state, tags: action.payload };
    case 'getAllFilter':
      return { ...state, filter: action.payload };
      return state;
  }
}
export default reducer;
