import { appReducer } from 'reducers/appReducer';
import { todoReducer } from 'reducers/todoReducer';
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({ todosState: todoReducer, appState: appReducer });

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
