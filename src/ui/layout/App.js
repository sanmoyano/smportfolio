import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Header from "./1.Nav/Header";
import Hero from "./2.Hero/Hero";
import Main from "./Main";
import Footer from "./7.Footer/Footer";

const App = () => {
    return (
        <BrowserRouter>
            <ChakraProvider resetCSS>
                <Header />
                <Hero />
                <Main />
                <Footer />
            </ChakraProvider>
        </BrowserRouter>
    );
};

export default App;
