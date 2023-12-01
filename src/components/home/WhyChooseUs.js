import ReasonCard from "./ReasonCard";
import classes from "./WhyChooseUs.module.css";
import { REASONS } from "./Data";
import Section from "../Section";

function WhyChooseUs() {
  return (
    <Section className={classes.section2} title="Why Choose Balanced Delights">
      <ul className={classes.reasons}>
        {REASONS.map((reason, i) => (
          <ReasonCard key={i} details={reason} />
        ))}
      </ul>
    </Section>
  );
}

export default WhyChooseUs;
