import "./Answer.css";

export default function Answer({ answerText, correct }) {
  return (
    <div className={`answer${correct ? " answer__correct" : " answer_wrong"}`}>
      <p className="answer__text">{answerText}</p>
    </div>
  );
}
