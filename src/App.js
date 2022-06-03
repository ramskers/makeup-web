import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AnimatedRoutes from "./AnimatedRoutes";

//Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
