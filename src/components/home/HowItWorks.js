import classes from "./HowItWorks.module.css";
import choosePlan from "../../assets/Choose-plan.png";
import makePayment from "../../assets/make-payment.png";
import getDelivery from "../../assets/get-delivery.png";
import arrowIcon from "../../assets/arrow-icon.png";

export default function HowItWorks() {
  return (
    <section className={classes["section3-container"]}>
      <h2>How it works</h2>
      <ul className={classes["steps-container"]}>
        <li className={`${classes.step} ${classes.step1}`}>
          <img src={choosePlan} alt="Select Your Plan" />
          <p>1. Select Your Plan</p>
        </li>
        <li className={classes.arrow}>
          <img src={arrowIcon} alt="arrow icon" />
        </li>
        <li className={`${classes.step} ${classes.step2}`}>
          <img src={makePayment} alt="Make a payment" />
          <p>2. Make a payment</p>
        </li>
        <li className={classes.arrow}>
          <img src={arrowIcon} alt="arrow icon" />
        </li>
        <li className={`${classes.step} ${classes.step3}`}>
          <img src={getDelivery} alt="Get your delivery" />
          <p>3. Get your delivery</p>
        </li>
      </ul>
    </section>
  );
}
