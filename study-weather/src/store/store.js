
import {createStore, compose, applyMiddleware} from "redux";
import reducer from './reducers';
import thunk from "redux-thunk";

const  componentEnhanders = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = componentEnhanders(applyMiddleware(thunk));

export default createStore(reducer, enhancer);

