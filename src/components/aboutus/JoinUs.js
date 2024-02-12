import { useNavigate } from "react-router-dom";
import classes from "./JoinUs.module.css";

function JoinUs() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/plans");
  }
  return (
    <div className={classes.container}>
      <h2>Join Us on Our Culinary Journey</h2>
      <p>
        At Balanced Delights, we invite you to join us on a journey of flavors,
        nourishment, and joy. Explore our menu, learn more about our commitment
        to quality, and experience the balanced delight in every bite.
      </p>
      <div className={classes.cta}>
        <button class="primary" onClick={handleClick}>
          Explore Plans
        </button>
        <button class="secondary">Contact Us</button>
      </div>
    </div>
  );
}

export default JoinUs;
