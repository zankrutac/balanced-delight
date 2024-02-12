import classes from "./Modal.module.css";
export default function Modal(props) {
  function handleClick() {
    props.onCloseModal();
  }
  return (
    <div className={classes["modal-container"]}>
      <button onClick={handleClick} className={classes["close-btn"]}>
        <i className="fa-solid fa-xmark"></i>
      </button>
      <i className={`fa-regular fa-circle-check ${classes["check-icon"]}`}></i>
      <h1 className={classes.heading}>Thank you for choosing us.</h1>
      <p> Your order has been successfully placed!</p>
    </div>
  );
}
