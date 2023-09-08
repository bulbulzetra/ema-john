import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import "./Product.css";
const Product = (props) => {
    // console.log(props)
  const { img, name, price, seller, ratings, quantity } = props.product;
  const handleAddToCart = props.handleAddToCart;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">Name:{name}</h6>
        <p><span className="text-blue-500 font-semibold">Price:</span> {price} </p>
        <p> <span className="text-blue-500 font-semibold">Manufacturer:</span> {seller}</p>
        <p><span className="text-blue-500 font-semibold">Rating :</span> {ratings}</p>
      </div>
      <button onClick={()=>handleAddToCart(props.product)}
       className="btn-cart">Add to Cart
       <FontAwesomeIcon icon={faShoppingCart} />
       </button>
    </div>
  );
};

export default Product;
