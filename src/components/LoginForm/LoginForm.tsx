import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import { loginSchema } from "../../formSchema";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useAppDispatch } from "../../hooks/redux";

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (
    values: LoginValues,
    action: FormikHelpers<LoginValues>
  ) => {
    try {
      await dispatch(login(values)).unwrap();
      setErrorMsg("");
      action.resetForm();
    } catch {
      setErrorMsg("Error logging in. Please check your credentials.");
      toast.error("Error logging in. Please check your credentials.");
    }
  };

  interface LoginValues {
    email: string;
    password: string;
  }
  const initialValues: LoginValues = { email: "", password: "" };

  return (
    <div className={css.loginContainer}>
      {errorMsg && (
        <div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.loginForm}>
          <label htmlFor="email">Email</label>
          <Field className={css.field} type="text" name="email" id="username" />
          <ErrorMessage
            name="email"
            component="span"
            className={css.errormsg}
          />
          <label htmlFor="password">Password</label>
          <Field
            className={css.field}
            type="password"
            name="password"
            id="password"
          />
          <ErrorMessage
            name="password"
            component="span"
            className={css.errormsg}
          />
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
}
// testSerg2k@mail.com
// qwe123123
