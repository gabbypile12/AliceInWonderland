import { useState, useEffect } from "react";

import "./App.css";
import GamePage from "../GamePage/GamePage";
import HomePage from "../HomePage/LandingPage";
import { Routes, Route } from "react-router-dom";
import { gameQuestions } from "../../utils/constants";

function App() {
  const [activeQuestion, setActiveQuestion] = useState("");

  useEffect(() => {
    setActiveQuestion(gameQuestions.tips[0].question);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/game-page"
          element={<GamePage activeQuestion={activeQuestion} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
