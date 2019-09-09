import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers/rootReducer';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

export const store = createStoreWithMiddleware(rootReducer);

