// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import "./App.css";
import GamePage from "../GamePage/GamePage";
import HomePage from "../HomePage/LandingPage";
import React, { useState, useEffect } from 'react'; 
import { Routes, Route } from "react-router-dom";
import { gameQuestions } from "../../utils/constants";

function App() {
  const [activeQuestionObj, setActiveQuestionObj] = useState("");

  useEffect(() => {
    setActiveQuestionObj(gameQuestions.tips[0]);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/game-page"
          element={<GamePage activeQuestionObj={activeQuestionObj} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
