import classes from "./Hero.module.css";

function Hero() {
  return (
    <div className={classes.hero}>
      <div className={classes["bg-overlay"]}>
        <div className={classes["hero-text"]}>
          <h1 className={classes.heading}>
            "Every Bite is a Tale of Home, Health, and Delight."
          </h1>
          <p className={classes.text}>
            Welcome to Balanced Delights, where the art of culinary balance
            meets the joy of delightful dining. Our journey began with a simple
            yet profound idea - to deliver homemade goodness that not only
            tantalizes your taste buds but also nourishes your well-being.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
