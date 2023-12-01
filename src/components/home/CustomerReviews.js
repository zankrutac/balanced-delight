import classes from "./CustomerReviews.module.css";
import ReviewCard from "./ReviewCard";
import { REVIEWS } from "./Data";
import Section from "../Section";

function CustomerReviews() {
  return (
    <Section title="Our Customers speak for us" className={classes.reviews}>
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
    </Section>
  );
}

export default CustomerReviews;
