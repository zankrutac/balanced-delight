import classes from "./Subscribe.module.css";
import { useState } from "react";
import { PLANS } from "../components/home/Data";

export default function Subscribe() {
  const [plan, setPlan] = useState({
    name: "Basic",
    frequency: "Monthly",
    price: 149.99,
    qty: 1,
  });

  function handlePlanChange(event) {
    const prop = event.target.id;
    const value = event.target.value;
    setPlan((prevPlan) => {
      const newPlan = { ...prevPlan };
      if (prop === "name") {
        newPlan.name = value;
      }
      newPlan.frequency = event.target.value;
      if (event.target.value === "Monthly") {
        newPlan.price = 149.99;
      } else if (event.target.value === "Weekly") {
        newPlan.price = 37.5;
      }

      return newPlan;
    });
  }
  return (
    <div className={classes.wrapper}>
      <h1>Select your plan</h1>
      <div className={classes.container}>
        <section className={classes["left-container"]}>
          <h2>Plan Details</h2>
          <form>
            <div className={classes["input-group"]}>
              <label htmlFor="name">Plan name</label>
              <select
                id="name"
                name="name"
                required
                onChange={handlePlanChange}
              >
                <option value="Basic">Basic</option>
                <option value="Regular">Regular</option>
                <option value="Premium">Premium</option>
                <option value="Deluxe">Deluxe</option>
              </select>
            </div>
            <div className={classes["input-group"]}>
              <label htmlFor="frequency">Frequency</label>
              <select
                id="frequency"
                name="frequency"
                required
                onChange={handlePlanChange}
              >
                <option value="Monthly">Monthly</option>
                <option value="Weekly">Weekly</option>
              </select>
            </div>
            <div className={classes["input-group"]}>
              <label htmlFor="start-date">Select Start Date</label>
              <input type="date" id="start-date" name="start-date" required />
            </div>
            <div className={classes["input-group"]}>
              <label htmlFor="qty">Quantity</label>
              <input
                type="number"
                value={plan.qty}
                id="qty"
                name="qty"
                min="1"
                required
                onChange={handlePlanChange}
              />
            </div>
            <div className={classes["btns-container"]}>
              <button className="secondary">Reset</button>
              <button className="primary">Place Order</button>
            </div>
          </form>
        </section>
        <section className={classes["right-container"]}>
          <h2>Price Summary</h2>
          <div className={classes["sub-container"]}>
            <p>
              Plan Name: <span className={classes.values}>{plan.name}</span>
            </p>
            <p>
              Plan Price: <span className={classes.values}>{plan.price}</span>
            </p>
            <p>Additional charges:</p>
            <div className={classes["total-price"]}>
              <p>
                Total Price:{" "}
                <span className={classes.values}>{plan.price}</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export function action({ request, params }) {
  const submittedData = request.formData();
  console.log(submittedData);
}
