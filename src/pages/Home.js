import React from "react";
import Gallery from "./Gallery/Gallery";
import Hero from "./Landing/Hero";
import Artist from "./Artist/Artist";
import { Schedule } from "./Schedule/Schedule";

function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <Artist />
      <Schedule />
    </>
  );
}

export default Home;
