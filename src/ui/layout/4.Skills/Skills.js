import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHtml5,
    faCss3Alt,
    faSass,
    faJs,
    faReact,
    faGithub,
    faGitAlt,
    faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
    return (
        <div id="skills" className="main__skills">
            <h2>.skills ( )</h2>
            <p>Languages and tools.</p>
            <div className="skills__container">
                <div className="skills__grid">
                    <div className="skills--colums">
                        <div className="skill--icon">
                            <FontAwesomeIcon icon={faHtml5} />
                        </div>
                        <div className="skill--icon-dos">
                            <FontAwesomeIcon icon={faCss3Alt} />
                        </div>
                        <div className="skill--icon">
                            <FontAwesomeIcon icon={faSass} />
                        </div>
                        <div className="skill--icon-dos">
                            <FontAwesomeIcon icon={faJs} />
                        </div>
                    </div>
                    <div className="skills--colums">
                        <div className="skill--icon-dos">
                            <FontAwesomeIcon icon={faReact} />
                        </div>
                        <div className="skill--icon">
                            <FontAwesomeIcon icon={faGitAlt} />
                        </div>
                        <div className="skill--icon-dos">
                            <FontAwesomeIcon icon={faGithub} />
                        </div>
                    </div>
                    <div className="skills--colums">
                        <div className="skill--icon">
                            <FontAwesomeIcon icon={faTerminal} />
                        </div>
                        <div className="skill--icon-dos">
                            <FontAwesomeIcon icon={faFigma} />
                        </div>
                        <div className="skill--icon">
                            <p>Ai</p>
                        </div>
                        <div className="skill--icon-dos">
                            <p>Ps</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
