import "./navbar.css";

export const Navbar = () => {
    let name = "Bookish";

    return (
        <nav>

            <h1 className="title"> Bienvenido a {name} </h1>

            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};