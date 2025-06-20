import css from "./Modal.module.css";

export default function Modal({ handleCloseModal, handleDelete }) {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <button
          className={css.cancelBtn}
          type="button"
          onClick={handleCloseModal}
        >
          No
        </button>
        <button className={css.yesBtn} type="button" onClick={handleDelete}>
          Yes
        </button>
      </div>
    </div>
  );
}
