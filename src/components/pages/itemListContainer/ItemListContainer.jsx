import BookCard from "../../common/bookCard/BookCard";
import "./itemListContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import LoadingComponent from "../../common/loader/Loader";

const ItemListContainer = () => {
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const booksCollection = collection(db, "books");
        const booksQuery = category
          ? query(booksCollection, where("category", "==", category))
          : booksCollection;

        const bookSnapshot = await getDocs(booksQuery);

        const bookData = bookSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setBookList(bookData);
      } catch (error) {
        console.error("Error al obtener libros de Firestore: ", error);
      } finally { setLoading(false); }
    };

    fetchBooks();
  }, [category]);

  return (
    <div className="item-list-container">
      <h1>Listado de libros</h1>
      {loading ? (
        <LoadingComponent/>
      ): (
      <div className="book-cards-container">
        {bookList.map((book) => (
          <BookCard
            key={book.id}
            author={book.author}
            title={book.title}
            price={book.price}
            image={book.image}
            alt={book.title}
            id={book.id}
          />
        ))}
      </div>

      )}
    </div>
  );
};

export default ItemListContainer;
