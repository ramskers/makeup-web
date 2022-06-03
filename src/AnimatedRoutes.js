import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AnimatePresence } from "framer-motion";

//Components
import Home from "./pages/Home";

function AnimatedRoutes() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
