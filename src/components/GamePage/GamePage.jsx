import { useState } from "react";

import "./GamePage.css";
import Header from "../Header/Header";
import Answer from "../Answers/Answer";

export default function GamePage({ activeQuestionObj }) {
  const [isActive, setIsActive] = useState(false);

  function startGame() {
    setIsActive(true);
  }

  return isActive ? (
    <div className="game-page">
      <Header activeQuestion={activeQuestionObj.question} />
      <div className="answers">
        <Answer answerText={activeQuestionObj.options[0]} />
        <Answer answerText={activeQuestionObj.options[1]} />
        <Answer answerText={activeQuestionObj.options[2]} />
        <Answer answerText={activeQuestionObj.options[3]} />
      </div>
    </div>
  ) : (
    <button type="button" className="start-btn" onClick={startGame}>
      START GAME
    </button>
  );
}
