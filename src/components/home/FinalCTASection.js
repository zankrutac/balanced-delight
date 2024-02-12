import { useNavigate } from "react-router-dom";
import classes from "./FinalCTASection.module.css";

export default function FinalCTASection() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/plans");
  }
  return (
    <section className={classes["final-sec-container"]}>
      <h2 className={classes["final-sec-heading"]}>
        Delight in Every Bite, Order Your Balanced Tiffin Today
      </h2>
      <p className={classes["final-sec-subtext"]}>
        Fuel your workdays with goodness. Choose our Balanced Tiffin service and
        enjoy the perfect blend of taste and nutrition delivered to your
        doorstep
      </p>
      <div className={classes["final-sec-button-container"]}>
        <button className="primary" onClick={handleClick}>
          Order Now
        </button>
      </div>
    </section>
  );
}
