import react from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './store';
import App from '../App';
import { Provider } from 'react-redux';

function Redux() {
  return;
  <Provider store={store}>
    <App />
    <ToastContainer />
  </Provider>;
}
export default Redux;
