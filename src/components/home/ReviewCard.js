import classes from "./ReviewCard.module.css";

function ReviewCard({ details, id }) {
  return (
    <li className={`${classes.review} ${classes[`bg-color${id}`]}`}>
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
