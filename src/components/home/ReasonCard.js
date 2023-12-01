import classes from "./ReasonCard.module.css";

function ReasonCard({ details }) {
  return (
    <li className={classes.reason}>
      <h6>{details.number}</h6>
      <h4>{details.title}</h4>
      <p>{details.description}</p>
    </li>
  );
}

export default ReasonCard;
