import { useState, useEffect } from "react";

import "./App.css";
import GamePage from "../GamePage/GamePage";
import { gameQuestions } from "../../utils/constants";

import { Routes, Route } from "react-router-dom";

function App() {
  const [activeQuestion, setActiveQuestion] = useState("");

  useEffect(() => {
    setActiveQuestion(gameQuestions.tips[0].question);
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/game-page"
          element={
            <GamePage
              activeQuestion={activeQuestion}
              setActiveQuestion={setActiveQuestion}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
