import classes from "./ReviewCard.module.css";

function ReviewCard({ details }) {
  return (
    <li className={classes.review}>
      <p>{details.review}</p>
      <div className={classes["author-section"]}>
        <img
          className={classes["author-img"]}
          src={details.img}
          alt={details.name}
        />
        <p>{details.name}</p>
      </div>
    </li>
  );
}

export default ReviewCard;
