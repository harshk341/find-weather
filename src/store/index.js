import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from '../reducers';

const middleWares = [thunk, logger];

const store = createStore(
    rootReducer,
    applyMiddleware(...middleWares)
);

export default store;