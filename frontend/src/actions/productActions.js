// defining actions as functions

import axios from "axios";
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"

// this function returns another function
export const listProducts = () => async(dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    });
    // fetch data from backend with ajax request
    try {
        const { data } = await axios.get('/api/products');
        // dispatch another action to update the state of redux
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
    } catch(error){
        // dispatch the fail scenario
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message});
    }
    
};