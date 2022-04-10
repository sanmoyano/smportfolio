import { BrowserRouter } from "react-router-dom";

import Header from "./1.Nav/Header";
import Main from "./Main";
import Footer from "./7.Footer/Footer";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Main />
            <Footer />
        </BrowserRouter>
    );
};

export default App;
