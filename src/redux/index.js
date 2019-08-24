import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension'; // eslint-disable-line import/no-extraneous-dependencies
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import rootSaga from './sagas';
const createHistory = require("history").createBrowserHistory;
const history = createHistory();
const historyMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware, historyMiddleware, thunk)),
);
sagaMiddleware.run(rootSaga);

export default store;
