import css from "./Contact.module.css";
import { RiContactsFill } from "react-icons/ri";
import { MdPhone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import Modal from "../Modal/Modal";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Contact({ contact }) {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(number);
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      dispatch(updateContact({ id, name: editedName, number: editedNumber }));
      toast.success("Contact updated!");
    }
  };

  const handleDelete = () => {
      toast.success("Successfully deleted!");
      dispatch(deleteContact(id));  
      handleCloseModal();
  };

  return (
    <div className={css.contactBox}>
      <div className={css.contact}>
        <div className={css.contactInfo}>
          <RiContactsFill />
          {isEditing ? (
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className={css.editInput}
            />
          ) : (
            <p className={css.name}>{name}</p>
          )}
        </div>
        <div className={css.contactInfo}>
          <MdPhone />
          {isEditing ? (
            <input
              type="text"
              value={editedNumber}
              onChange={(e) => setEditedNumber(e.target.value)}
              className={css.editInput}
            />
          ) : (
            <p>{number}</p>
          )}
        </div>
      </div>
      <button className={css.editBtn} type="button" onClick={handleEditToggle}>
        {isEditing ? "Save" : "Edit"}
      </button>
      {isModalOpen ? (
        <Modal
          handleCloseModal={handleCloseModal}
          handleDelete={handleDelete}
        />
      ) : (
        <button
          className={css.delbtn}
          type="button"
          onClick={() => handleOpenModal()}
        >
          Delete
        </button>
      )}
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
    </div>
  );
}
