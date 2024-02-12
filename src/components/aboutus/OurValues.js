import classes from "./OurValues.module.css";
import ValuesCard from "./ValuesCard";
import balancedImg from "../../assets/balanced.png";
import qualityImg from "../../assets/quality.png";
import communityImg from "../../assets/community.png";

const VALUES = [
  {
    title: "Balance",
    image: balancedImg,
    description:
      "We believe in the power of balance in every aspect of life, from nutrition to flavor profiles.",
  },
  {
    title: "Quality",
    image: qualityImg,
    description:
      "We prioritize quality in every ingredient and process to ensure your satisfaction.",
  },
  {
    title: "Community",
    image: communityImg,
    description:
      "We are more than a service; we are a community that celebrates the joy of sharing good food.",
  },
];

function OurValues() {
  return (
    <section className={classes["values-sec"]}>
      <div className={classes["values-container"]}>
        <h2>Our Values</h2>
        <div className={classes.values}>
          {VALUES.map((val, i) => (
            <ValuesCard key={i} value={val} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default OurValues;
