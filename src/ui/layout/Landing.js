import Hero from "./2.Hero/Hero";
import Projects from "./3.Projects/Projects";
import Skills from "./4.Skills/Skills";
import About from "./5.About/About";
import Contact from "./6.Contact/Contact";

const Landing = () => {
    return (
        <>
            <Hero title={"#sm"} words={"Creative front end developer and designer."} />
            <Projects />
            <Skills />
            <About />
            <Contact />
        </>
    );
};

export default Landing;
