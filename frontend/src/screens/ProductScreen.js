import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';
// import data from '../data'

export default function ProductScreen(props) {
    const dispatch = useDispatch();
    // getting ID from url
    const productId = props.match.params.id;
    const productDetails = useSelector((state) => state.productDetails)
    // desconstruction product, loading and error
    const { loading, error, product } = productDetails;
    
    // dispatch product details with useEffect
    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId])
    return (
        <div>
        { loading ? (
            <LoadingBox></LoadingBox>
        ) : error ? (
            <MessageBox varient="danger">{error}</MessageBox>
        ) : (
       <div>
            <Link to="/">Back to Results</Link>
            <div className="row top">
                <div className="col-2">
                    <img className="large" src={product.image} alt={product.name}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                        </li>
                        <li>
                            Price : ${product.price}
                        </li>
                        <li>
                            Description:
                            <p>{product.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div className="price">${product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status</div>
                                    <div>
                                        {product.countInStock > 0 ? (
                                          <span className="success">In Stock</span>  
                                        ) : (
                                            <span className="danger">Unavailable</span>
                                        )}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
            )} 
        </div>
        
    )
}

// to get from static file in front end: const product = data.products.find((x) => x._id === props.match.params.id);
    // if (!product) {
    //     return <div>Product Not Found</div>
    // }
    // add above at line 13
    // remove content 15-21