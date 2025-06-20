import css from "./UserMenu.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { NavLink } from "react-router";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { BiLogOut } from "react-icons/bi";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <div className={css.userMenu}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button className={css.btn} type="button" onClick={handleLogOut}>
        <BiLogOut size="25" />
        <span>LogOut</span>
      </button>
    </div>
  );
}
