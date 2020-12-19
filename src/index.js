import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore,applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkmiddelware from "redux-thunk"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { changename, requestRobots } from "./redux/reducers";

const logger = createLogger();
const rootReducers = combineReducers({requestRobots, changename})
const store = createStore(rootReducers, applyMiddleware(thunkmiddelware, logger))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} ><App  /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();