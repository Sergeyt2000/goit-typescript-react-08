import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
// import { customAlphabet } from "nanoid";
// import { numbers } from "nanoid-dictionary";
import css from "./ContactForm.module.css";
import { formSchema } from "../../formSchema";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
  const dispatch = useDispatch();  
  const nameFieldId = useId();
  const phoneFieldId = useId();
  // const generateId = customAlphabet(numbers, 5);
  const initialContacts = { username: "", phonenumber: "" };  
  
  const handleSubmit = (values, actions) => {
    toast.success("Successfully added!");
    dispatch(
      addContact({
        // id: "id-" + generateId(),
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
