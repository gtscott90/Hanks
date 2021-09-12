import data from "./data";
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
// defining initial state
const initialState = {};

// reducer is a function that accepts two parameters (state, action) and then returns a new state
// this will return data.products in front end
const reducer = (state, action) => {
    return {products: data.products}
;}
// allow compose to connect to chrome devtools so see the state and store in Redux Dev Tools
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create stores with the create store function from redux
// accepts reducer and initial state
// accpets third parameter called thunk to allow ajax calls from store
const store = createStore(
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;