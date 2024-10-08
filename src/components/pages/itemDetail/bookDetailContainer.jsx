import React, { useState, useEffect } from 'react'
import BookDetail from './bookDetail'
import books from '../../../booksMock'
import { useParams } from 'react-router-dom'

const BookDetailContainer = () => {

    const [item, setItem] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        let book = books.find((book) => book.id === parseInt(id))
        if(book) {
            setItem(book)
        }
    }, [id])

    return <BookDetail item={item}/>
}

export default BookDetailContainer
