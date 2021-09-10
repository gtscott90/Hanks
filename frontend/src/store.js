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

// create stores with the create store function from redux
// accepts reducer and initial state
// accpets third parameter called thunk to allow axios calls from store
const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export default store;