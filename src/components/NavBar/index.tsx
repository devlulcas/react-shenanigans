import { Link } from "react-router-dom";
import "./styles.css";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/animephrase">Mensagem de anime</Link>
        </li>
      </ul>
    </nav>
  );
}
