import { Route, Routes } from "react-router-dom";
import { Children } from "react";

import ProjectListContainer from "../containers/ProjectListContainer";

import Hero from "./2.Hero/Hero";
import Landing from "./Landing";
import Skills from "./4.Skills/Skills";
import About from "./5.About/About";
import Contact from "./6.Contact/Contact";

const Main = () => {
    return (
        <main id="main__container">
            <Routes>
                <Route element={<Landing />} path="/" />
                <Route
                    element={
                        <>
                            <Hero title={"Hey!"} words={"This are all my projects."} />
                            <ProjectListContainer />
                        </>
                    }
                    path="/projects/:id"
                />
                <Route
                    element={
                        <>
                            <Hero title={"#sk"} words={"This are my skills. Always improving."} />
                            <Skills />
                        </>
                    }
                    path="/skills"
                />
                <Route
                    element={
                        <>
                            <Hero
                                title={"#me"}
                                words={"Hey, how are you? This is a litle description about me."}
                            />
                            <About />
                        </>
                    }
                    path="/about"
                />
                <Route
                    element={
                        <>
                            <Hero
                                title={"Hi!"}
                                words={"Let's talk a little and tell me about you."}
                            />
                            <Contact />
                        </>
                    }
                    path="/contact"
                />
            </Routes>
        </main>
    );
};

export default Main;
