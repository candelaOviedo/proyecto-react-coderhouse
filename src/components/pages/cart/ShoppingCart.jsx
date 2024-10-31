import React, { useState } from "react";
import { useCart } from "../../../context/ShoppingCartContext";
import LoadingComponent from "../../common/loader/Loader";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const { cart, removeFromCart, completePurchase, addToCart } = useCart();
  const [loading, setLoading] = useState(false);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleIncrease = (item) => {
    addToCart(item, 1);
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      addToCart(item, -1);
    }
  };

  const handleCompletePurchase = async () => {
    setLoading(true);
    await completePurchase();
    setLoading(false);
  };

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div className="shopping-cart">
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="item-image" />
                <div className="item-details">
                  <h4>{item.title}</h4>
                  <p>Autor: {item.author}</p>
                  <p>Precio: AR$ {item.price.toFixed(2)}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <div className="quantity-controls">
                    <button
                      onClick={() => handleDecrease(item)}
                      disabled={item.quantity <= 1}
                      className="btn decrease-btn"
                    >
                      -
                    </button>
                    <button
                      onClick={() => handleIncrease(item)}
                      className="btn increase-btn"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="btn remove-btn"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: AR$ {total.toFixed(2)}</h3>
          <button onClick={handleCompletePurchase} className="btn complete-btn">
            Finalizar Compra
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
