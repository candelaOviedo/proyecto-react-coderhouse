import React from 'react'
import './detail.css'



const BookDetail = ({ item }) => {
  return (
    <div>
      
      {item ? ( 
        <div className="detail-container">
            <img className='img-book' src={item.image} alt={item.title} />
          <section>
          <section className='header-detail'>
              <h2 className=' title-book'>{item.title}</h2>
              <h3 className='author-book'>Autor: {item.author}</h3>
            </section>
            <p className='price'>Precio: AR$ {item.price}</p>
            <p className='description'>Descripción: {item.description}</p>

          </section>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  )
}

export default BookDetail