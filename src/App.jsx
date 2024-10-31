import Navbar from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookDetailContainer from "./components/pages/itemDetail/bookDetailContainer";
import CartContainer from "./components/pages/cart/cartContainer";
import NotFound from "./components/pages/notFound/NotFound";
import { CartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />

          <Route path={"/bookDetail/:id"} element={<BookDetailContainer />} />
          <Route path={"/cart"} element={<CartContainer />} />
          <Route path={"category/:category"} element={<ItemListContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
