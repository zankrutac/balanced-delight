import heroImage from "../../assets/hero-image.png";
import classes from "./Hero.module.css";

function HeroSection() {
  return (
    <section className={classes.hero}>
      <div className={classes.left}>
        <h1 className={classes.heading}>Experience Home-cooked Goodness</h1>
        <p className={classes.paragraph}>
          Our food subscription box offers a hassle-free way for Indian working
          professionals and students to enjoy delicious tiffin meals every day.
          With three food options and a special discount for students, it’s the
          perfect solution for anyone looking for convenient and affordable meal
          delivery.
        </p>
        <div className={classes.buttons}>
          <button className="primary">Order Now</button>
          <button className="secondary">Explore Plans</button>
        </div>
      </div>
      <div className={classes.right}>
        <img className={classes["hero-img"]} src={heroImage} alt="tiffin box" />
      </div>
    </section>
  );
}

export default HeroSection;
