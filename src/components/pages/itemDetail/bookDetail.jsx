import React from "react";
import "./bookDetail.css";
import LoadingComponent from "../../common/loader/Loader";

const BookDetail = ({ item, quantity, onQuantityChange, onAddToCart }) => {
  return (
    <div className="main-container">
      {item ? (
        <div className="detail-container">
          <section className="header-detail">
            <h2 className="title-book">{item.title}</h2>
            <img className="img-book" src={item.image} alt={item.title} />
          </section>
          <section className="info-book">
            <section className="text-price-container">
            <h3 className="author-book">Autor: {item.author}</h3>
              <p className="description">Descripción: {item.description}</p>
              <p className="price">Precio: AR$ {item.price}</p>
          <section className="selectQuantity">
            <h5 className="quantity-title">Cantidad:</h5>
            <select value={quantity} onChange={onQuantityChange}>
              {[...Array(item.stock)].map((_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
            <button onClick={onAddToCart}>Agregar al carrito</button>
          </section>
            </section>
          </section>
        </div>
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
};

export default BookDetail;
