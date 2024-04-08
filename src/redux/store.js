//import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import productSaga from './productSaga';
import createSagaMiddleware from 'redux-saga';
import {loadState, saveState} from './localStorage';

const sagaMiddleware = createSagaMiddleware();
const preloadedState = loadState();
const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware],
    preloadedState
});

store.subscribe(() => {
    saveState(store.getState());
});

sagaMiddleware.run(productSaga);
export default store;