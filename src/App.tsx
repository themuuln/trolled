import React, { useState, useEffect } from "react";
import TrollFace from "./assets/trollface.png";
import Sound from "./assets/Troll Sound Effect.mp3";
import "./App.css"

function App() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const audio = new Audio(Sound);
    audio.loop = true;
    audio.play();
  }, []);

  const handleButtonClick = () => {
    setShowText(true);
  };

  return (
    <>
      <img src={TrollFace} alt="trollface" />
      <h1>You just got trolled by themuuln!!!</h1>
      <h1>Problem?</h1>
      <button onClick={handleButtonClick}>Click here to turn Music off!</button>
      {showText && <h1>AHAHAHAAHAAA!</h1>}
    </>
  );
}

export default App;
