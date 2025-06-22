import css from "./UserMenu.module.css";
import { logout } from "../../redux/auth/operations";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { BiLogOut } from "react-icons/bi";
import { useAppDispatch } from "../../hooks/redux";

export default function UserMenu() {
  const dispatch = useAppDispatch();
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
