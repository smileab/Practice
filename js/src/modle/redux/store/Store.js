import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/Index';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function configureStore() {
    return createStoreWithMiddleware(rootReducer);
}
