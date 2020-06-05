declare global {
  interface Window {
    process?: Object;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

import {createStore, compose, applyMiddleware, combineReducers, Reducer, StoreEnhancer } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { lazyReducerEnhancer } from 'pwa-helpers/lazy-reducer-enhancer.js';
import { CounterAction } from './actions/types/appTypes';
import { RootAction } from './actions';
import { RootState } from './reducers/types';
import mySaga from './sagas/appSagas';
import counter from './reducers/appReducers'

const devCompose: <Ext0, Ext1, StateExt0, StateExt1>(
    f1: StoreEnhancer<Ext0, StateExt0>, f2: StoreEnhancer<Ext1, StateExt1>
  ) => StoreEnhancer<Ext0 & Ext1, StateExt0 & StateExt1> =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    state => state as Reducer<RootState, RootAction>,
    devCompose(
        lazyReducerEnhancer(combineReducers),
        applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(mySaga)

store.addReducers({
  counter
})