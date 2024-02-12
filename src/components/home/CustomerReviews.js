import classes from "./CustomerReviews.module.css";
import ReviewCard from "./ReviewCard";
import { REVIEWS } from "../../Data";

function CustomerReviews() {
  return (
    <section className={classes.reviews}>
      <h2>Our Customers speak for us</h2>
      <div className={classes.container}>
        {/* <button>
          <i class="fa-solid fa-arrow-left"></i>
        </button> */}
        <ul className={classes["reviews-container"]}>
          {REVIEWS.map((review, i) => (
            <ReviewCard
              className={classes["review-item"]}
              key={i}
              id={i}
              details={review}
            />
          ))}
        </ul>
        {/* <button>
          <i class="fa-solid fa-arrow-right"></i>
        </button> */}
      </div>
    </section>
  );
}

export default CustomerReviews;
