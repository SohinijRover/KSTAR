import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
import { HashRouter, Switch, Route } from "react-router-dom";
import ElementPages from "./Pages/ElementPages";
import FooterTwo from "./Components/FooterTwo";
import Register from "./Pages/Register";
import Submit from "./Pages/Submit";
import ScaleLoader from "react-spinners/ScaleLoader";

function App() {
  // Page loading animation
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="min-h-full">
      <HashRouter basename="/kstar">
        <Switch>
          <Route exact path="/">
            {loading ? (
              <div className="flex flex-wrap justify-center items-center w-full h-screen bg-gradient-to-b from-viodeep to-violight">
                <ScaleLoader
                  color={"#FEC416"}
                  height={70}
                  width={8}
                  radius={30}
                  margin={4}
                />
              </div>
            ) : (
              <Home />
            )}
          </Route>
          <Route path="/music">
            <ElementPages
              title="Music"
              content="“To play a wrong note is insignificant .To play without passion is inexcusable”-Beethovan
                If you are a musician and feel like the mundane routine has toned down your passion and love for music, then hold your fire no more.The stage is all set for you to mesmerize everyone with your euphonious voice. To be the best instrumentalist or vocalist among your peers. Let this wonderful event encourage you to sustain your passion , love and proclivity for music."
              img="./assets/Event/music.svg"
              guidelines="./assets/guidelines/KSTAR_Music_Guide.pdf"
            />
          </Route>
          <Route path="/design">
            <ElementPages
              title="Design"
              content="“Design creates culture.Culture creates values.Values determine the future.”-Robert .L.Peters It is in everything we make but also between those things.It is a mix of craft,science,storytelling,propaganda and philosophy.We hereby invite our fellow designers to paint the canvas of people’s imagination with their ethereal talent."
              img="./assets/Event/design.svg"
              guidelines="./assets/guidelines/KSTAR_Design_Guide.pdf"
            />
          </Route>
          <Route path="/dance">
            <ElementPages
              title="Dance"
              content="“Why walk when you can dance?” We can't always choose the music that life plays for us but we can choose how we dance to it. The world is full of rhythms and beats if we listen closely. If you dance like you are the only one watching and feel the rhythm of the music in your soul as you dance to it, then this 72 hour challenge is all you need to showcase your talent."
              img="./assets/Event/dance.svg"
              guidelines="./assets/guidelines/KSTAR_Dance_Guide.pdf"
            />
          </Route>
          <Route path="/snapshot">
            <ElementPages
              title="Snapshot"
              content="“Photography is the story everyone fails to put into words.” You and your camera precious moments that vanish before you even realise. Do you think you have what it takes to turn a fleeting moment into a precious memory?If yes then we have an astounding opportunity to showcase your talent and make others see the world through your lens."
              img="./assets/Event/photography.svg"
              guidelines="./assets/guidelines/KSTAR_Snapshot_Guide.pdf"
            />
          </Route>
          <Route path="/writing">
            <ElementPages
              title="Writing"
              content="In this world of abbreviations if your heart still flutters at the site of a novel that you are yet to discover, if the smell of new books brings you joy, if the taste of your coffee is incomplete without a book in your hand and if the sound of a shakespearean reference makes you smile, then you are at the right place.We through this challenge would like to encourage and embrace your talents, whether it’s a short story or poetry let your work blow your peers mind."
              img="./assets/Event/writing.svg"
              guidelines="./assets/guidelines/KSTAR_Writing_Guide.pdf"
            />
          </Route>
          <Route path="/painting">
            <ElementPages
              title="Painting"
              content="Art, if one must say, is a reflection of your beliefs, it is the expression of the way you perceive the world to be , a mere spitting image of your soul. There’s no such thing as a good painter but if your art makes people wonder about your perception of the world then you are indeed a commendable painter. So grab this opportunity as you grab that brush of yours and paint the canvas to showcase your unparalleled talent."
              img="./assets/Event/paint.svg"
              guidelines="./assets/guidelines/KSTAR_Painting_Guide.pdf"
            />
          </Route>
          <Route path="/fashion">
            <ElementPages
              title="Fashion"
              content="“Fashion is the most powerful art there is. It’s movement, design and architecture all in one. It shows the world who we are and who we would like to be.” If you are someone who chooses fashion to express and not to impress, if dressing up doesn't just mean looking pretty but influences the way you feel about yourself and if you consider yourself a fashionista as one might say , then this is the perfect opportunity for you. Register now for the world to adore your elegance."
              img="./assets/Event/fashion.svg"
              guidelines="./assets/guidelines/KSTAR_Fashion_Guide.pdf"
            />
          </Route>
          <Route path="/acting">
            <ElementPages
              title="Acting"
              content="Aren't we all movie buffs? It's like our go-to thing for entertainment.When we see a movie with a character we like, we want to be that character as well. A director brings the stories to life, while an actor brings the characters to life. Acting is not just playing a part- it is so much more than that. It's about telling a story and expressing your emotions through a character. The world is your stage, be the main character of your life. It's showtime, bring out the actor in you and exhibit your talent in acting."
              img="./assets/Event/acting.svg"
              guidelines="./assets/guidelines/KSTAR_Acting_Guide.pdf"
            />
          </Route>
          <Route path="/flim">
            <ElementPages
              title="Short Flim"
              content="Do you know the ideology behind the concept of short films “ALL TOO WELL(taylor’s short film)”?Is“THE HUNT” of a good short film enough to bond “TWO DISTANT STRANGERS”.If you think so too and see yourself as the next Anurag Kashyap or Tarantino , then you my friend are at the right place.Kstar brings to the table a unique event that intends to discover and honour the very best and rising filmmakers among us."
              img="./assets/Event/video.svg"
              guidelines="./assets/guidelines/KSTAR_Shortfilm_Guide.pdf"
            />
          </Route>
          <Route exact path="/register">
            {" "}
            <Register />{" "}
          </Route>
          <Route exact path="/submit">
            {" "}
            <Submit />{" "}
          </Route>
        </Switch>
        {loading ? "" : <FooterTwo />}
      </HashRouter>
    </div>
  );
}

export default App;
