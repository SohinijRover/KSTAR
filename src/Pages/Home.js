import React, { useState, useEffect } from "react";
import Header from "../Components/Home/Header";
import Hero from "../Components/Home/Hero";

function Home() {
  const [height, setHeight] = useState();
  useEffect(() => setHeight(document.body.scrollHeight));
  return (
    <div className="flex flex-col relative" style={{ height: `${height}px` }}>
      <Header />
      <Hero />
    </div>
  );
}

export default Home;
