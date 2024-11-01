import React, { useState, useEffect } from "react";
import BookDetail from "./bookDetail";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useCart } from "../../../context/ShoppingCartContext";
import Swal from "sweetalert2";

const BookDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const bookRef = doc(db, "books", id);
        const bookSnap = await getDoc(bookRef);

        if (bookSnap.exists()) {
          setItem({ id: bookSnap.id, ...bookSnap.data() });
        } else {
          console.log("No se encontró el libro.");
        }
      } catch (error) {
        console.error("Error al obtener el libro:", error);
      }
    };

    if (id) {
      fetchBook();
    }
  }, [id]);

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    if (value >= 1 && value <= item?.stock) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    if (item && quantity <= item.stock) {
      addToCart(item, quantity);
      Swal.fire({
        title: "Producto agregado al carrito",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "No hay suficiente stock para la cantidad seleccionada.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <BookDetail
      item={item}
      quantity={quantity}
      onQuantityChange={handleQuantityChange}
      onAddToCart={handleAddToCart}
    />
  );
};

export default BookDetailContainer;
