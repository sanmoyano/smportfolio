import { Link } from "react-router-dom";

const Nav = (active) => {
    const cambioDeClase = active;

    return (
        <nav className={cambioDeClase.active == true ? "nav__layout--on" : "nav__layout"}>
            <Link className="nav--link" to="/projects">
                .Projects ( )
            </Link>
            <Link className="nav--link" to="/skills">
                .Skills ( )
            </Link>
            <Link className="nav--link" to="/about">
                .About ( )
            </Link>
            <Link className="nav--link" to="/contact">
                .Contact ( )
            </Link>
        </nav>
    );
};

export default Nav;
