import classes from "./PlansSection.module.css";
import PlanCard from "./PlanCard";
import { useState } from "react";
import { PLANS } from "./Data";
import Section from "../Section";
import Button from "../Button";

function PlansSection() {
  const [selectedMeal, setSelectedMeal] = useState("veg");

  function handleClick(mealType) {
    setSelectedMeal(mealType);
  }

  return (
    <Section title="Find Your Plan" className={classes["plans-sec"]}>
      <menu>
        <li>
          <Button
            title="Vegetarian"
            className={selectedMeal === "veg" ? classes.active : undefined}
            onClick={() => {
              handleClick("veg");
            }}
          />
        </li>
        <li>
          <Button
            title="Non-Vegetarian"
            className={selectedMeal === "non-veg" ? classes.active : undefined}
            onClick={() => {
              handleClick("non-veg");
            }}
          />
        </li>
      </menu>
      <div>
        <h3>
          {selectedMeal === "veg" ? "Vegetarian Plans" : "Non-Vegetarian Plans"}
        </h3>

        <ul className={classes.plans}>
          {PLANS.filter((plan) => plan.type === selectedMeal).map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
          {/* {PLANS[selectedMeal].map((plan, i) => (
            <PlanCard key={i} plan={plan} />
          ))} */}
        </ul>
      </div>
    </Section>
  );
}

export default PlansSection;
