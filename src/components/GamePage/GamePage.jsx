import "./GamePage.css";
import Header from "../Header/Header";

export default function GamePage({ activeQuestion }) {
  return (
    <div className="game-page">
      <Header activeQuestion={activeQuestion} />
    </div>
  );
}
