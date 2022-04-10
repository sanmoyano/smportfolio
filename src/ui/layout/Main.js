import { Route, Routes } from "react-router-dom";

import ItemListContainer from "../containers/ItemListContainer";

import Projects from "./3.Projects/Projects";
import Skills from "./4.Skills/Skills";
import About from "./5.About/About";
import Contact from "./6.Contact/Contact";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route element={<ItemListContainer />} path="/" />
                <Route element={<ItemListContainer />} path="/projects" />
            </Routes>
            <Projects />
            <Skills />
            <About />
            <Contact />
        </main>
    );
};

export default Main;
