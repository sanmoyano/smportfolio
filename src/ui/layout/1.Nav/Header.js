import { Link } from "react-router-dom";
import { useState } from "react";

import Nav from "./Nav";

const Header = () => {
    const [activeTogle, setActiveTogle] = useState(false);

    const handleClick = () => {
        setActiveTogle(!activeTogle);
    };

    return (
        <header className="header__layout" id="header__layout">
            <Link className="header__layout--logo" to="/">
                {activeTogle === false ? <h1>#sm</h1> : ""}
            </Link>
            <div className="nav__toggle--icon" onClick={handleClick}>
                {activeTogle === false ? (
                    <div aria-controls="toggle__off"> . /</div>
                ) : (
                    <div aria-controls="toggle__on">.. /</div>
                )}
            </div>
            <Nav active={activeTogle} />
        </header>
    );
};

export default Header;
