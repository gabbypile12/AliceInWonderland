import "./Answer.css";

export default function Answer({ answerText }) {
  return (
    <div className="answer">
      <p className="answer__text">{answerText}</p>
    </div>
  );
}
