// import data from "./data";
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer } from "./reducers/productReducers";
// defining initial state
const initialState = {};

// reducer is a function that accepts two parameters (state, action) and then returns a new state
    // this will return data.products in front end, would need to import data from front end
    // const reducer = (state, action) => {
    //     return {products: data.products}
    // ;}
// combineReducers accepts an object as a parameter and introduces the reducers to the store
const reducer = combineReducers({
    productList: productListReducer
})

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