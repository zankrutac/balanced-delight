import classes from "./PlanCard.module.css";
import { Link } from "react-router-dom";

function PlanCard(props) {
  const bgColor = props.plan.type === "non-veg" ? "header-nv" : "header-v";

  return (
    <li className={classes["plan-card"]}>
      <header className={classes[`${bgColor}`]}>
        <h3>{props.plan.name}</h3>
        <h4>{props.plan.price}</h4>
        <p>per month</p>
      </header>

      <Link
        to={`/subscribe/${props.plan.id}`}
        className={classes[`${bgColor}`]}
      >
        Customize
      </Link>

      <ul>
        {props.plan.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </li>
  );
}

export default PlanCard;
