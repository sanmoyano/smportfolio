import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Logo from "../1.Nav/Logo";

const Footer = () => {
    return (
        <footer>
            <div className="footer__container">
                <Logo />
                <div className="footer__social">
                    <a href="https://github.com/sanmoyano" rel="noreferrer" target="_blank">
                        <FontAwesomeIcon alt="GitHub" icon={faGithub} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/santiago-moyano/"
                        rel="me noreferrer"
                        target="_blank"
                    >
                        <FontAwesomeIcon alt="LinkedIn" icon={faLinkedinIn} />
                    </a>
                    <a href="mailto:smoyano.di@gmail.com">
                        <FontAwesomeIcon alt="Email" icon={faEnvelope} />
                    </a>
                </div>
            </div>
            <div className="footer__tagline">
                <p>2022 - Design and developed by Santiago Moyano.</p>
            </div>
        </footer>
    );
};

export default Footer;
