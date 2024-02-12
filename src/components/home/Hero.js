import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/group-46.png";
import classes from "./Hero.module.css";

function HeroSection() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("plans");
  }
  return (
    <section className={classes["hero-container"]}>
      <div className={classes["left-container"]}>
        <h1>Experience Home-cooked Goodness</h1>
        <p className={classes.paragraph}>
          Authentic Indian tiffin, made with love. Fresh, healthy, and perfectly
          balanced.
        </p>
        <div className={classes.buttons}>
          <button className="primary" onClick={handleClick}>
            Explore Plans
          </button>
          {/* <button className="secondary">Explore Plans</button> */}
        </div>
      </div>
      <div className={classes["right-container"]}>
        <img
          className={classes["hero-img"]}
          src={heroImage}
          alt="plate with multiple indian food items"
        />
      </div>
    </section>
  );
}

export default HeroSection;
