import classes from "./OurStory.module.css";
import founder from "../../assets/founder.png";

function OurStory() {
  return (
    <div className={classes["story-container"]}>
      <div className={classes.left}>
        <h2>Our Story</h2>
        <p>
          At Balanced Delights, every meal is a crafted masterpiece infused with
          love and passion. Founded in 2019, we started with a small kitchen and
          a big dream: to redefine the tiffin service experience. Our founder,
          Aditi Joshi, envisioned a service that not only provides convenience
          but also ensures every bite brings joy and health.
        </p>
      </div>
      <img className={classes.right} src={founder} alt="founder" />
    </div>
  );
}

export default OurStory;
