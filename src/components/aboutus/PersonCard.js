import classes from "./PersonCard.module.css";
function PersonCard(props) {
  return (
    <div className={classes.card}>
      <img
        className={classes["profile-img"]}
        src={props.person.image}
        alt="Profile Pic"
      />

      <div className={classes.details}>
        <p>{props.person.name}</p>
        <p>{props.person.designation}</p>
      </div>
    </div>
  );
}

export default PersonCard;
