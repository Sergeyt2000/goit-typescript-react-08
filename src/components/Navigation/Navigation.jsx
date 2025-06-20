import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { FcHome, FcContacts } from "react-icons/fc";

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
      //   <nav>
      <ul className={css.navigation}>
        <li>
          <NavLink className={css.navItem} to="/">
            <FcHome size="25" />
            <span>Home</span>
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink className={css.navItem} to="/contacts">
              <FcContacts size="25" />
              <span>Contacts</span>
            </NavLink>
          </li>
        )}
      </ul>
      //   </nav>
    );
}