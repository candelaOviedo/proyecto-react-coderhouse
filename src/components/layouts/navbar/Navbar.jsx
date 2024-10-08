import { Link } from "react-router-dom";
import CartWidget from "../../common/cartWidget/CartWidget"
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container-nav">
      <Link to={"/"}>
        <h3> <img src="https://res.cloudinary.com/dq9qp6jqx/image/upload/c_crop,ar_16:9/v1726078406/BookishApp_lcnjqt.png" alt="Logo" id="img-logo" /> </h3>
      </Link>
      <ul>
        <Link to={"/"}>
          <li>Libros </li>
        </Link>

        <Link to={"/category/novedades"}>
          <li> Novedades  </li>
        </Link>

        <Link to={"/category/masVendidos"}>
          <li>Más vendidos </li>
        </Link>

        <Link to={"/category/ofertas"}>
          <li>  Ofertas  </li>
        </Link>
      </ul>

      <Link to={'/cart'}>
        <CartWidget />
      </Link>


    </div>
  )
}

export default Navbar