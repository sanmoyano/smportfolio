import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header aria-expanded="false" className="header__layout">
            <Link className="header__layout--logo" to="/">
                <h1>#sm</h1>
            </Link>
            <nav className="header__layout--nav">
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
        </header>
    );
};

export default Header;
