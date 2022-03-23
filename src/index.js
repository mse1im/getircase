import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import { reducer } from './Redux/Reducers/todoReducer';

const store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(
     <Provider store={store}>
       <App />
     </Provider>,
  document.getElementById('getir')
);