import { Link } from "react-router-dom";

const Nav = (active) => {
    const cambioDeClase = active;

    return (
        <nav className={cambioDeClase.active == true ? "nav__layout--on" : "nav__layout"}>
            <Link className="nav--link" to="/projects">
                .projects ( )
            </Link>
            <Link className="nav--link" to="/skills">
                .skills ( )
            </Link>
            <Link className="nav--link" to="/about">
                .about ( )
            </Link>
            <Link className="nav--link" to="/contact">
                .contact ( )
            </Link>
        </nav>
    );
};

export default Nav;
