import { createContext, useState, useContext } from "react";
import Swal from "sweetalert2";
import { db } from "../firebaseConfig";
import { doc, updateDoc, getDoc } from "firebase/firestore";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (book, quantity) => {
    const existingBook = cart.find((item) => item.id === book.id);
    const currentQuantity = existingBook ? existingBook.quantity : 0;
    const newQuantity = currentQuantity + quantity;

    if (newQuantity > book.stock) {
      Swal.fire({
        title: "Error!",
        text: "No hay suficiente stock para la cantidad seleccionada.",
        timer: 2000,
        timerProgressBar: true,
      });
      return;
    }

    setCart((prevCart) => {
      if (existingBook) {
        if (newQuantity <= 0) {
          return prevCart.filter((item) => item.id !== book.id);
        }
        return prevCart.map((item) =>
          item.id === book.id ? { ...item, quantity: newQuantity } : item
        );
      }
      return [...prevCart, { ...book, quantity }];
    });
  };

  const increaseQuantity = (book) => {
    addToCart(book, 1);
  };

  const decreaseQuantity = (book) => {
    addToCart(book, -1);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const completePurchase = async () => {
    try {
      const confirmation = await Swal.fire({
        title: "¿Estás seguro de que deseas finalizar la compra?",
        text: "Esto no se puede deshacer.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, finalizar compra",
      });

      if (confirmation.isConfirmed) {
        if (cart.length === 0) {
          await Swal.fire({
            title: "Error",
            text: "El carrito está vacío.",
            icon: "error",
            confirmButtonText: "Aceptar",
          });
          return;
        }

        let summary = "Resumen de la compra:\n\n";
        cart.forEach((item) => {
          summary += `${item.title} - Cantidad: ${
            item.quantity
          } - Precio: AR$ ${item.price.toFixed(2)}\n`;
        });
        summary += `\nTotal: AR$ ${cart
          .reduce((acc, item) => acc + item.price * item.quantity, 0)
          .toFixed(2)}`;

        await Swal.fire({
          title: "Compra finalizada con éxito!",
          text: summary,
          icon: "success",
          confirmButtonText: "Aceptar",
        });

        for (const item of cart) {
          const bookRef = doc(db, "books", item.id);
          const docSnap = await getDoc(bookRef);

          if (docSnap.exists()) {
            const currentStock = docSnap.data().stock;
            if (currentStock >= item.quantity) {
              await updateDoc(bookRef, {
                stock: currentStock - item.quantity,
              });
            } else {
              await Swal.fire({
                title: "Error",
                text: `No hay suficiente stock para ${item.title}.`,
                icon: "error",
                confirmButtonText: "Aceptar",
              });
              return;
            }
          } else {
            console.error("No se encontró el libro:", item.id);
          }
        }

        setCart([]);
      }
    } catch (error) {
      console.error("Error al completar la compra:", error);
      await Swal.fire({
        title: "Error",
        text: `Hubo un problema al completar la compra: ${error.message}`,
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        completePurchase,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
