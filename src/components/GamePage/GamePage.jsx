import { useState } from "react";

import "./GamePage.css";
import Header from "../Header/Header";
import Answer from "../Answers/Answer";

export default function GamePage({ activeQuestion }) {
  const [isActive, setIsActive] = useState(false);

  function startGame() {
    setIsActive(true);
  }

  return isActive ? (
    <div className="game-page">
      <Header activeQuestion={activeQuestion} />
      <div className="answers">
        <Answer answerText="I am an answer" />
        <Answer answerText="I am an answer" />
        <Answer answerText="I am an answer" />
        <Answer answerText="I am an answer" />
      </div>
    </div>
  ) : (
    <button type="button" className="start-btn" onClick={startGame}>
      START GAME
    </button>
  );
}
