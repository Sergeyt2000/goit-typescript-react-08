import css from './AuthNav.module.css';
import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <nav>
      <ul className={css.authNav}>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login">Log In</NavLink>
        </li>
      </ul>
    </nav>
  );
}