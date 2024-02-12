import classes from "./ReasonCard.module.css";

function ReasonCard({ details }) {
  return (
    <li className={classes["reason-card-container"]}>
      <div>
        <img src={details.image} alt={details.title} />
      </div>
      <h3>{details.title}</h3>
      <p>{details.description}</p>
    </li>
  );
}

export default ReasonCard;
