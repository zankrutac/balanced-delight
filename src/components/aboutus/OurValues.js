import classes from "./OurValues.module.css";
import ValuesCard from "./ValuesCard";

const VALUES = [
  {
    title: "Balance",
    description:
      "We believe in the power of balance in every aspect of life, from nutrition to flavor profiles.",
  },
  {
    title: "Quality",
    description:
      "We prioritize quality in every ingredient and process to ensure your satisfaction.",
  },
  {
    title: "Community",
    description:
      "We are more than a service; we are a community that celebrates the joy of sharing good food.",
  },
];

function OurValues() {
  return (
    <div className={classes["values-sec"]}>
      <h2>Our Values</h2>
      <div className={classes.values}>
        {VALUES.map((val, i) => (
          <ValuesCard key={i} value={val} />
        ))}
      </div>
    </div>
  );
}
export default OurValues;
