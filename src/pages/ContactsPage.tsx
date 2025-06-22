import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import css from "./ContactsPage.module.css";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import { useAppDispatch } from "../hooks/redux";

export default function Contacts() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contactsPage}>
      <div className={css.contactsPageAddForm}>
        <ContactForm />
        <SearchBox />
      </div>
      <ContactList />
    </div>
  );
}
