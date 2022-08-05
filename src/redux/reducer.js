import { getStorage } from '../services';
let loggedin = false;
let user = null;
if (getStorage('uid')) {
  loggedin = true;
  user = {
    uid: getStorage('uid'),
    name: getStorage('name'),
    phone: getStorage('phone'),
    email: getStorage('email'),
    password: getStorage('password'),
  };
}

const initialState = {
  filters: [],
  tags: [],
  products: [],
  loggedin: loggedin,
  user: user,
  users: [],
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
    case 'getAllUsers':
      return { ...state, users: action.payload };
    case 'logout':
      return { ...state, users: null, loggedin: false };
    case 'login':
      return { ...state, users: action.payload, loggedin: true };
    default:
      return state;
  }
}
export default reducer;
