import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Header from "./1.Nav/Header";
import Main from "./Main";
import Footer from "./7.Footer/Footer";

const App = () => {
    return (
        <BrowserRouter>
            <ChakraProvider>
                <Header />
                <Main />
                <Footer />
            </ChakraProvider>
        </BrowserRouter>
    );
};

export default App;
