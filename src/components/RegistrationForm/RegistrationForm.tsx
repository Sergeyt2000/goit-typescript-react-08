import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { registerSchema } from "../../formSchema";
import { useAppDispatch } from "../../hooks/redux";

export default function RegistrationForm() {
  const dispatch = useAppDispatch();

  const handleSubmit = (
    values: RegisterValues,
    action: FormikHelpers<RegisterValues>
  ) => {
    console.log("Form submitted with values:", values);
    dispatch(register(values));
    action.resetForm();
  };

  interface RegisterValues {
    name: string;
    email: string;
    password: string;
  }
const initialValues: RegisterValues = { name: "", email: "", password: "" };

  return (
    <div className={css.regContainer}>
      <p className={css.regFormText}>Please fill out the form to register.</p>
      <Formik
        initialValues={initialValues}
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
