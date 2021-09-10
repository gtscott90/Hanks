import data from "./data";
import { createStore } from 'redux';

// defining initial state
const initialState = {};

// reducer is a function that accepts two parameters (state, action) and then returns a new state
// this will return data.products in front end
const reducer = (state, action) => {
    return {products: data.products}
;}

// create stores with the create store function from redux
// accepts reducer and initial state
const store = createStore(reducer, initialState);

export default store;