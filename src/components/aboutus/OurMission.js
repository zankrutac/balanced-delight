import classes from "./OurMission.module.css";
import missionImage from "../../assets/balanced-plate.png";

function OurMission() {
  return (
    <div className={classes["mission-container"]}>
      <div className={classes.container}>
        <img
          className={classes.image}
          src={missionImage}
          alt="Balanced Food Plate"
        />
        <div className={classes.right}>
          <h2>Our Mission</h2>
          <p>
            Balanced Delights is on a mission to bring the warmth of homemade
            meals to your doorstep. We believe in the power of well-balanced
            nutrition and the joy that comes with savoring flavors reminiscent
            of home-cooked goodness. Our mission is to make every meal a moment
            of delight and a celebration of balance.
          </p>
        </div>
      </div>
      <div className={classes.section2}>
        <h3>What Sets Us Apart</h3>
        <div className={classes.subsec}>
          <p>
            <b>Fresh and Wholesome Ingredients:</b> We source the finest,
            locally-sourced ingredients to ensure the freshness and quality of
            every dish.
          </p>
          <p>
            <b> Nutritionally Balanced:</b> Our culinary experts carefully craft
            each menu to provide a harmonious blend of taste and nutrition.{" "}
          </p>
          <p>
            <b> Homemade with Love:</b> Every meal is prepared with the same
            love and care you'd find in a home kitchen.{" "}
          </p>
          <p>
            <b> Tailored for You:</b> We understand that everyone's taste and
            dietary needs are unique. That's why we offer customizable options
            to suit your preferences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurMission;
