import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__container">
                <h1 className="hero__logo">#sm</h1>
                <h2 className="hero__tagline">
                    <Typewriter
                        cursor="true"
                        cursorStyle="|"
                        delaySpeed={1500}
                        typeSpeed={90}
                        words={["Creative front end developer and designer."]}
                    />
                </h2>
            </div>
        </div>
    );
};

export default Hero;
