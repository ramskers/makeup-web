import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import AnimatedRoutes from "./AnimatedRoutes";

//Components
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <AnimatedRoutes /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
