import classes from "./ValuesCard.module.css";

function ValuesCard(props) {
  return (
    <div className={classes.card}>
      <img src={props.value.image} alt={props.value.title} />
      <h3>{props.value.title}</h3>
      <p>{props.value.description}</p>
    </div>
  );
}

export default ValuesCard;
