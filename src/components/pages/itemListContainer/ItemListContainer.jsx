import BookCard from "../../common/bookCard/BookCard"
import "./itemListContainer.css"

const ItemListContainer = ( {greeting, user} ) => {

  return (
    <div className="item-list-container">
      <h2> {greeting},{user}! </h2>
      <h1>Listado de libros</h1>
      <div className="book-cards-container">
        <BookCard author="Colleen Hoover" title="Romper el círculo" price={32900} image= "https://res.cloudinary.com/dq9qp6jqx/image/upload/v1726073086/romper_el_circulo_dl9yl4.jpg" alt=""/>

        <BookCard author="Julia Cameron" title="El camino del artista" price={25999} image="https://res.cloudinary.com/dq9qp6jqx/image/upload/v1726075349/ssqq31vg4hjsj7nqpeu3_mh5xno.jpg" />

        <BookCard author="James Clear" title="Hábitos atómicos" price={34900} image="https://res.cloudinary.com/dq9qp6jqx/image/upload/v1726075463/a5kor2xbd47mt212ybmo_rwhmkg.jpg" />

        <BookCard author="Miguel Ruiz" title="Los cuatro acuerdos" price={25500} image="https://res.cloudinary.com/dq9qp6jqx/image/upload/v1726075990/6tet4jz9ufy5wmcd9jiu_cvfnyh.jpg" />

        <BookCard author="Keri Smith" title="Destroza este diario" price={27200} image="https://res.cloudinary.com/dq9qp6jqx/image/upload/v1726076231/0dv4yedtgto1a5p2psqq_qnnfvm.jpg" />

      </div>
    </div>
  )
}

export default ItemListContainer