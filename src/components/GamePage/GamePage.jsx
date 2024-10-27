import { useState, useEffect } from "react";

import "./GamePage.css";
import Header from "../Header/Header";
import Answer from "../Answers/Answer";

import Alice from "../../assets/alice.png";

export default function GamePage({ activeQuestionObj }) {
  const [isActive, setIsActive] = useState(false);

  function startGame() {
    setIsActive(true);
  }

  function moveCharacter(e) {
    const character = document.querySelector(".game-page__character");
    const leftValueStr = window
      .getComputedStyle(character)
      .getPropertyValue("left");
    const leftValue = +leftValueStr.replace("px", "");
    const increment = 30;

    if (e.key === "ArrowLeft") {
      character.style.left = `${leftValue - increment}px`;
    }
    if (e.key === "ArrowRight") {
      character.style.left = `${leftValue + increment}px`;
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", moveCharacter);

    return () => {
      window.removeEventListener("keydown", moveCharacter);
    };
  }, []);

  return isActive ? (
    <div className="game-page">
      <Header activeQuestion={activeQuestionObj.question} />
      <div className="answers">
        <Answer answerText={activeQuestionObj.options[0]} />
        <Answer answerText={activeQuestionObj.options[1]} />
        <Answer answerText={activeQuestionObj.options[2]} />
        <Answer answerText={activeQuestionObj.options[3]} />
      </div>
      <img src={Alice} alt="Alice Character" className="game-page__character" />
    </div>
  ) : (
    <div className="start-page">
      <button type="button" className="start-btn" onClick={startGame}>
        START GAME
      </button>
    </div>
  );
}
