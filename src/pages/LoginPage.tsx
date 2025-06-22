import LoginForm from "../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

export default function LoginPage() {

  return (
    <div className={css.loginPage}>
      <p>Please enter your credentials to log in.</p>
      <LoginForm />
    </div>
  );
}
