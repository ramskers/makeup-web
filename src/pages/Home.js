import React from "react";
import Gallery from "./Gallery/Gallery";
import Hero from "./Landing/Hero";
import Artist from "./Artist/Artist";
import { Schedule } from "./Schedule/Schedule";
import Services from "./Services/Services";

function Home() {
  return (
    <>
      <Hero />
      <Artist />
      <Gallery />
      <Services />
      <Schedule />
    </>
  );
}

export default Home;
