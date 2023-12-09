import React, { useState } from "react";
import CardStyle from "./CardStyle";

function CardInfo() {
  const [b] = useState([
    {
      id: 1,
      imageUrl: "./assets/Home/event/music.svg",
      title: "Music",
      link:"/music",
    },
    {
      id: 2,
      imageUrl: "./assets/Home/event/dance.svg",
      title: "Dance",
      link:"/dance",
    },
    {
      id: 3,
      imageUrl: "./assets/Home/event/draw.svg",
      title: "Painting",
      link:"/painting",
    },
    {
      id: 4,
      imageUrl: "./assets/Home/event/acting.svg",
      title: "Acting",
      link:"/acting",
    },
    {
      id: 5,
      imageUrl: "./assets/Home/event/graphic.svg",
      title: "Design",
      link:"/design",
    },
    {
      id: 6,
      imageUrl: "./assets/Home/event/photography.svg",
      title: "Snapshot",
      link:"/snapshot",
    },
    {
      id: 7,
      imageUrl: "./assets/Home/event/Fashion.svg",
      title: "Fashion",
      link:"/fashion",
    },
    {
      id: 8,
      imageUrl: "./assets/Home/event/video.svg",
      title: "Short Flim",
      link:"/flim",
    },
    {
      id: 9,
      imageUrl: "./assets/Home/event/writing.svg",
      title: "Writing",
      link:"/writing",
    },
    
  ]);
  return (
    <div className="overflow-hidden w-full flex justify-center" id="cards">
      <div className="mb-10 w-10/12 flex flex-wrap justify-center">
        {b.map(({ id, ...otherprops }) => (
          <div key={id} className="w-10/12 md:w-6/12 lg:w-4/12 z-20 flex justify-center">
            <CardStyle key={id} {...otherprops} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardInfo;