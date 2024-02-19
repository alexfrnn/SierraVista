import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-title">Sierra Vista</div>
      <div className="nav-menu">
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Sign up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productivity">
                Productivity
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
