import { Typewriter } from "react-simple-typewriter";

const Hero = ({ title, words }) => {
    return (
        <div className="hero">
            <div className="hero__container">
                <h1 className="hero__logo">{title}</h1>
                <h2 className="hero__tagline">
                    <Typewriter
                        cursor="true"
                        cursorStyle="▌"
                        delaySpeed={1500}
                        loop={false}
                        typeSpeed={90}
                        words={[words]}
                    />
                </h2>
            </div>
        </div>
    );
};

export default Hero;
