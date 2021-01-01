import {createStore, applyMiddleware, compose} from 'redux';
import AllReducers from './reducers/index';
import {save} from 'redux-localstorage-simple';

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
    
const configureStore = preloadedState => (
    createStore(
        AllReducers,
        preloadedState,
        composeEnhancers(
            applyMiddleware(save({namespace:'todo-list'}))
        ),
      )
    );
 
const store = configureStore({});

export default store;