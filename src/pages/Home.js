import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { filteredProducts, loading, error } = useSelector(
    (state) => state.products
  );
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    if (!user) {
      navigate("/signin");
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <div className="home-container">
      <Sidebar />
      <div className="products-container">
        <h1>Home Page</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.imageUrl} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
