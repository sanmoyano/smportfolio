import { BrowserRouter } from "react-router-dom";

import Header from "./1.Nav/Header";
import Hero from "./2.Hero/Hero";
import Main from "./Main";
import Footer from "./7.Footer/Footer";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Hero />
            <Main />
            <Footer />
        </BrowserRouter>
    );
};

export default App;
