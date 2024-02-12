import classes from "./PlansSection.module.css";
import PlanCard from "./PlanCard";
import { useState } from "react";
import { PLANS } from "../../Data";

function PlansSection() {
  const [selectedMeal, setSelectedMeal] = useState("veg");

  function handleClick(mealType) {
    setSelectedMeal(mealType);
  }

  return (
    <section className={classes["plans-sec"]}>
      <h2>Find Your Plan</h2>
      <menu>
        <li>
          <button
            className={selectedMeal === "veg" ? classes.active : undefined}
            onClick={() => {
              handleClick("veg");
            }}
          >
            Vegetarian
          </button>
        </li>
        <li>
          <button
            className={selectedMeal === "non-veg" ? classes.active : undefined}
            onClick={() => {
              handleClick("non-veg");
            }}
          >
            Non-Vegetarian
          </button>
        </li>
      </menu>
      <div>
        <h3 className={classes["menu-tabs"]}>
          {selectedMeal === "veg"
            ? " Vegetarian Plans"
            : " Non-Vegetarian Plans"}
        </h3>

        <ul className={classes.plans}>
          {PLANS.filter((plan) => plan.type === selectedMeal).map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PlansSection;
