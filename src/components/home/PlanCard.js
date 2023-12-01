import classes from "./PlanCard.module.css";
import { Link } from "react-router-dom";

function PlanCard(props) {
  return (
    <li className={classes.plan}>
      <h3>{props.plan.planName}</h3>
      <ul>
        {props.plan.items.map((item) => (
          <li key={props.plan.id}>{item}</li>
        ))}
      </ul>
      <p>{props.plan.frequency}</p>
      <p>{props.plan.price}</p>
      <Link to={`/${props.plan.id}`}>Customize</Link>
    </li>
  );
}

export default PlanCard;
