import React, { useEffect } from 'react'
// import axios from 'axios';
import Product from '../components/Product'
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList
    useEffect(() =>{
        dispatch(listProducts());
    }, [dispatch])
    return (
        <div>
        { loading ? (
            <LoadingBox></LoadingBox>
        ) : error ? (
            <MessageBox varient="danger">{error}</MessageBox>
        ) : (
        <div className="row center">
            { products.map((product) => (
                <Product key={product._id} product={product}></Product>
                ))} 
            </div>
            )} 
        </div>
    );
}
// to use react hooks use this before return instead of lines 10-14, need to import axios and useState
// const [products, setProducts] = useState([]);
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(false);
// useEffect(() =>{
//     const fetchData = async () => {
//         try {
//             setLoading(true);
//             const { data } = await axios.get('/api/products');
//             setLoading(false);
//             setProducts(data);  
//         } catch (err) {
//             setError(err.message);
//             setLoading(false);
//         }
        
//     };
//     fetchData();
// }, [])