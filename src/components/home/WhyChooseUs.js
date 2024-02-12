import ReasonCard from "./ReasonCard";
import classes from "./WhyChooseUs.module.css";
import { REASONS } from "../../Data";

function WhyChooseUs() {
  return (
    <section className={classes["section2-container"]}>
      <h2 className={classes["section2-heading"]}>
        Why Choose Balanced Delights
      </h2>
      <div className={classes["reasons-container"]}>
        <ul className={classes["reasons-list"]}>
          {REASONS.map((reason, i) => (
            <ReasonCard key={i} details={reason} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WhyChooseUs;
