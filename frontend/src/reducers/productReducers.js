import { 
    PRODUCT_DETAILS_REQUEST, 
    PRODUCT_DETAILS_SUCCESS, 
    PRODUCT_LIST_FAIL, 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS 
} from "../constants/productConstants";

// this reducer is a function that accepts two parameters, state must have a default of products as an emptry array to avoid error
export const productListReducer = (
    state = { loading: true, products: [] }, 
    action
    ) => {
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            // setting loading to true while sending the ajax request
            return { loading: true };
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload };
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            // returning current state
            return state;
    }
}

export const productDetailsReducter = (state = {product:{}, loading: true}, action) => {
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            // setting loading to true while sending the ajax request
            return { loading: true };
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        default:
            return state;
    }
}