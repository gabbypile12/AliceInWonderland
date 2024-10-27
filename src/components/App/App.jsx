import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import "./App.css";
import GamePage from "../GamePage/GamePage";
import HomePage from "../HomePage/LandingPage";
import { Routes, Route } from "react-router-dom";

function App() {
  const [activeQuestion, setActiveQuestion] = useState("");

  useEffect(() => {
    setActiveQuestion(gameQuestions.tips[0].question);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/game-page" element={<GamePage />}></Route>
      </Routes>
      
    </>
  );
}

export default App;
