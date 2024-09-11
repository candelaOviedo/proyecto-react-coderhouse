import CartWidget from "../../common/cartWidget/CartWidget"
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container-nav">
        <h3> <img src="https://res.cloudinary.com/dq9qp6jqx/image/upload/c_crop,ar_16:9/v1726078406/BookishApp_lcnjqt.png" alt="Logo" id="img-logo" /> </h3>
        <ul>
            <li> <a href=""> Libros </a> </li>
            <li> <a href=""> Novedades </a> </li>
            <li> <a href=""> Más vendidos </a> </li>
            <li> <a href=""> Ofertas </a> </li>
        </ul>

        <CartWidget />

    </div>
  )
}

export default Navbar