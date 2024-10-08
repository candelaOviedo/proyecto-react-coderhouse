import BookCard from "../../common/bookCard/BookCard"
import "./itemListContainer.css"
import books from '../../../booksMock'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting, user }) => {

  const [bookList, setBookList] = useState([])
  const {category} = useParams();


  useEffect(()=> {
  const filteredBooks = category ? books.filter(book => book.category === category) : books;
  setBookList(filteredBooks)
  }, [category])

  return (
    <div className="item-list-container">
      <h2>{greeting}, {user}!</h2>
      <h1>Listado de libros</h1>
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
    </div>
  )
}

export default ItemListContainer