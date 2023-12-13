import React from "react";
import Header from "../Components/Home/Header";
import Hero from "../Components/Home/Hero";

function Home() {
  return (
    <div className="flex flex-col" style={{height: `${document.body.scrollHeight}px`}}>
      <Header />
      <div className="flex-1 relative">
      <Hero />
      </div>
    </div>
  );
}

export default Home;
