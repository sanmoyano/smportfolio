import { Route, Routes } from "react-router-dom";


import Projects from "./3.Projects/Projects";
import Skills from "./4.Skills/Skills";
import About from "./5.About/About";
import Contact from "./6.Contact/Contact";

const Main = () => {
    return (
        <main id="main__container">
            {/* <Routes>
                <Route element={ProjectListContainer />} path="/projects" />
            </Routes> */}
            <Projects />
            <Skills />
            <About />
            <Contact />
        </main>
    );
};

export default Main;
