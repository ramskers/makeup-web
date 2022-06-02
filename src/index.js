import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import GlamBySamTheme from "./styles/ThemeProvider";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={GlamBySamTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
