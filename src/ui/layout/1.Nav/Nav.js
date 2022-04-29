import { Link, Slide } from "@chakra-ui/react";

const Nav = (active) => {
    const cambioDeClase = active;

    return (
        <nav nav className={cambioDeClase.active == true ? "nav__layout--on" : "nav__layout"}>
            <Link className="nav--link" href="#projects">
                .projects ( )
            </Link>
            <Link className="nav--link" href="#skills">
                .skills ( )
            </Link>
            <Link className="nav--link" href="#about">
                .about ( )
            </Link>
            <Link className="nav--link" href="#contact">
                .contact ( )
            </Link>
        </nav>
    );
};

export default Nav;
