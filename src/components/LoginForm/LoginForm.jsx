import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import { loginSchema } from "../../formSchema";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function LoginForm() {
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(login(values)).unwrap();
      setErrorMsg("");
      resetForm();      
    } catch {
      setErrorMsg("Error logging in. Please check your credentials.");
      toast.error("Error logging in. Please check your credentials.");
    }    
  };

  return (
    <div className={css.loginContainer}>
      {errorMsg && <div>
        <Toaster position="top-center" reverseOrder={false} /></div>}
      <Formik
        initialValues={{ email: "", password: "" }}
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