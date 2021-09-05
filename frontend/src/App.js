import React from 'react';


function App() {
  return (
    <div className="grid-container">
    <header className="row">
        <div>
            <a className="brand" href="index.html">Hank's</a>
        </div>
        <div>
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
        </div>
    </header>
    <main>
        <div className="row center">
            <div className="card">
                <a href="product.html">
                    <img className="medium" src="./images/product-1.jpeg" alt="product" />
                </a>
                <div className="card-body">
                    <a href="product.html">
                        <h2>Product 1</h2>
                    </a>
                    <div className="rating">
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                    </div>
                    <div className="price">
                        $12
                    </div>
                </div>
            </div>
            <div className="card">
                <a href="product.html">    
                    <img className="medium" src="./images/product-2.jpeg" alt="product" />
                </a>
                <div className="card-body">
                    <a href="product.html">
                        <h2>Product 2</h2>
                    </a>
                    <div className="rating">
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                    </div>
                    <div className="price">
                        $12
                    </div>
                </div>
            </div>
            <div className="card">
                <a href="product.html">
                    <img className="medium" src="./images/product-3.jpeg" alt="product" />
                </a>
                <div className="card-body">
                    <a href="product.html">
                        <h2>Product 3</h2>
                    </a>
                    <div className="rating">
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                    </div>
                    <div className="price">
                        $12
                    </div>
                </div>
            </div>
            <div className="card">
                <a href="product.html">    
                    <img className="medium" src="./images/product-4.jpeg" alt="product" />
                </a>
                <div className="card-body">
                    <a href="product.html">
                        <h2>Product 4</h2>
                    </a>
                    <div className="rating">
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                    </div>
                    <div className="price">
                        $12
                    </div>
                </div>
            </div>
            <div className="card">
                <a href="product.html">    
                    <img className="medium" src="./images/product-5.jpeg" alt="product" />
                </a>
                <div className="card-body">
                    <a href="product.html">
                        <h2>Product 5</h2>
                    </a>
                    <div className="rating">
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                    </div>
                    <div className="price">
                        $12
                    </div>
                </div>
            </div>
            <div className="card">
                <a href="product.html">    
                    <img className="medium" src="./images/product-6.jpeg" alt="product" />
                </a>
                <div className="card-body">
                    <a href="product.html">
                        <h2>Product 6</h2>
                    </a>
                    <div className="rating">
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star"></i></span>
                        <span><i className="fas fa-star-half-alt" aria-hidden="true"></i></span>
                        <span><i className="far fa-star"></i></span>
                    </div>
                    <div className="price">
                        $12
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer className="row center">
        All Rights Reserved
    </footer>
</div>
  );
}

export default App;
