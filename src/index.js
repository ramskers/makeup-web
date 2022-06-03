import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import GlamBySamTheme from "./styles/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={GlamBySamTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
