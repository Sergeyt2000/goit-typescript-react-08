import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { registerSchema } from "../../formSchema";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted with values:", values);
    dispatch(register(values));
    resetForm();
  };

  return (
    <div className={css.regContainer}>
      <p className={css.regFormText}>Please fill out the form to register.</p>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.regForm}>
          <label className={css.reFormLabel} htmlFor="name">
            Username
          </label>
          <Field className={css.field} type="text" name="name" />
          <ErrorMessage name="name" component="span" className={css.errormsg} />
          <label className={css.reFormLabel} htmlFor="email">
            Email
          </label>
          <Field className={css.field} type="email" name="email" />
          <ErrorMessage
            name="email"
            component="span"
            className={css.errormsg}
          />
          <label className={css.reFormLabel} htmlFor="password">
            Password
          </label>
          <Field className={css.field} type="password" name="password" />
          <ErrorMessage
            name="password"
            component="span"
            className={css.errormsg}
          />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}
