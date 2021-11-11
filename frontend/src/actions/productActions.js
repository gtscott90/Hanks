// defining actions as functions

import axios from "axios";
import { 
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST, 
    PRODUCT_DETAILS_SUCCESS, 
    PRODUCT_LIST_FAIL, 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS 
} from "../constants/productConstants"
import ProductScreen from "../screens/ProductScreen";

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

export const detailsProduct = (productId) => async(dispatch) => {
    dispatch({
        type: PRODUCT_DETAILS_REQUEST, payload: productId
    });
    try {
        const { data } = await axios.get(`api/products/${productId}`);
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data});
    } catch(error) {
        // check for error.response, if it exists then backend failed error message
        // show error.response instead of general error message of error.message
        // otherwise show the gnereal error of error.message
        dispatch({
            type: PRODUCT_DETAILS_FAIL, 
            payload: 
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.message
        });
    }
}