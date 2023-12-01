import heroImage from "../../assets/aboutus-hero-image.png";
import classes from "./Hero.module.css";

function Hero() {
  return (
    <div className={classes.hero}>
      <div className={classes["hero-container"]}>
        <img src={heroImage} alt="Indian Food" />
        <div className={classes["hero-text"]}>
          <h1>"Every Bite is a Tale of Home, Health, and Delight."</h1>
        </div>
      </div>
      <p>
        Welcome to Balanced Delights, where the art of culinary balance meets
        the joy of delightful dining. Our journey began with a simple yet
        profound idea - to deliver homemade goodness that not only tantalizes
        your taste buds but also nourishes your well-being.
      </p>
    </div>
  );
}

export default Hero;
