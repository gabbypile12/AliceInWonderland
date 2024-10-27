import "./Header.css";
import { Link } from "react-router-dom";

export default function Header({ activeQuestion }) {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
          <p className="nav__link">Go Back Home</p>
        </Link>
      </nav>
      <div className="header__question-container">
        <h1 className="header__question">{activeQuestion}</h1>
      </div>
    </header>
  );
}

// azure
// palevioletred
