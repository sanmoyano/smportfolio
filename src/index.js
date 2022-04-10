import React from "react";
import { createRoot } from "react-dom/client";

import App from "./ui/layout/App";
import reportWebVitals from "./reportWebVitals";
import "./styles.scss";

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

reportWebVitals();
