import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
import { formSchema } from "../../formSchema";
import { addContact } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";
import { useAppDispatch } from "../../hooks/redux";

export default function ContactForm() {
  const dispatch = useAppDispatch();  
  const nameFieldId = useId();
  const phoneFieldId = useId();

  
  interface FormValues {
    username: string;
    phonenumber: string;
  }
  const initialContacts: FormValues = { username: "", phonenumber: "" };  
  
  const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    toast.success("Successfully added!");
    dispatch(
      addContact({
        name: values.username,
        number: values.phonenumber,
      })
    );
    actions.resetForm();
  }
  return (
    <Formik
      initialValues={initialContacts}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      <Form className={css.contactForm}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="username" id={nameFieldId} />
        <ErrorMessage
          name="username"
          component="span"
          className={css.errormsg}
        />
        <label htmlFor={phoneFieldId}>Number</label>
        <Field type="tel" name="phonenumber" id={phoneFieldId} />
        <ErrorMessage
          name="phonenumber"
          component="span"
          className={css.errormsg}
        />
        <button className={css.addbtn} type="submit">
          Add contact
        </button>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
        />
      </Form>
    </Formik>
  );
}
