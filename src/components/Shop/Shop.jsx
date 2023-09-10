import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

const Shop = () => {
  const [products, setProducts] = useState([]);
const [cart, setCart] = useState([])
  
useEffect(() => {
    fetch("products.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  useEffect(()=>{
    const storedCart = getShoppingCart();
    const savedCart = [];
    // Step-1 : Get id of the added product
     for ( const id in storedCart){
      // Get Product from products state by using id
      const addedProduct = products.find(product =>product.id ===id)
      if(addedProduct){
        // add quantity
        const quantity = storedCart[id]
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct)
      }
      // console.log('added Product', addedProduct)
     }
     setCart(savedCart)
  },[products])
  
  const handleAddToCart = (product) =>{
    const newCart = [...cart,product]
    // if product doesn't exist in  the cart , then set quantity =1 
    // if exist update the quantity by 1

    setCart(newCart)
    addToDb(product.id)
    
  }

  return (
    <div className="shop-container">
      <div className="products-container">
        {
            products.map(product =><Product 
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
            ></Product>)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
