import { useState, useEffect, useCallback } from "react";

import "./GamePage.css";
import Header from "../Header/Header";
import Answer from "../Answers/Answer";

import Alice from "../../assets/alice.png";

export default function GamePage({ activeQuestionObj }) {
  const [isActive, setIsActive] = useState(false);
  const [charElem, setCharElem] = useState({});
  const [obstacleElem, setObstacleElem] = useState({});

  useEffect(() => {
    setCharElem(document.querySelector(".game-page__character"));
    setObstacleElem(document.querySelector(".answers"));
  }, [isActive]);

  function startGame() {
    setIsActive(true);
  }

  const moveCharacter = useCallback(
    (e) => {
      const leftValueStr = window
        .getComputedStyle(charElem)
        .getPropertyValue("left");

      const leftValue = +leftValueStr.replace("px", "");
      const increment = 30;

      if (e.key === "ArrowLeft") {
        charElem.style.left = `${leftValue - increment}px`;
      }
      if (e.key === "ArrowRight") {
        charElem.style.left = `${leftValue + increment}px`;
      }
    },
    [isActive, charElem]
  );

  useEffect(() => {
    window.addEventListener("keydown", moveCharacter);

    return () => {
      window.removeEventListener("keydown", moveCharacter);
    };
  }, [moveCharacter, isActive]);

  // --- COLLISION LOGIC----

  // Helper function to get element boundaries
  const getBounds = (element) => element.getBoundingClientRect();

  // Function to check if two elements are colliding
  const isColliding = (el1, el2) => {
    const rect1 = getBounds(el1);
    const rect2 = getBounds(el2);

    return !(
      rect1.top > rect2.bottom ||
      rect1.bottom < rect2.top ||
      rect1.right < rect2.left ||
      rect1.left > rect2.right
    );
  };

  useEffect(() => {
    if (isActive) {
      // Logic to trigger something when collision occurs
      const checkCollision = () => {
        if (isColliding(charElem, obstacleElem)) {
          console.log("Collision detected!");
          // setIsActive(false);
        }
      };

      // Continuously check for collisions (simple game loop)
      setInterval(checkCollision, 100); // Runs every 100ms
    }
    // return () => {
    //   clearInterval(checkCollision);
    // };
  }, [charElem, obstacleElem, isActive, isColliding]);

  // ----END OF COLLISION LOGIC -----

  return isActive ? (
    <div className="game-page">
      <Header activeQuestion={activeQuestionObj.question} />
      <div className="answers">
        <Answer
          answerText={activeQuestionObj.options[0]}
          correct={0 === activeQuestionObj.indexOfCorrectAns}
        />
        <Answer
          answerText={activeQuestionObj.options[1]}
          correct={1 === activeQuestionObj.indexOfCorrectAns}
        />
        <Answer
          answerText={activeQuestionObj.options[2]}
          correct={2 === activeQuestionObj.indexOfCorrectAns}
        />
        <Answer
          answerText={activeQuestionObj.options[3]}
          correct={3 === activeQuestionObj.indexOfCorrectAns}
        />
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
