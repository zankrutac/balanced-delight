import { useParams } from "react-router-dom";
import classes from "./Subscribe.module.css";
import { useState } from "react";
import { PLANS } from "../Data";
import Modal from "../components/Modal";

export default function Subscribe() {
  const params = useParams();
  const planId = params.planId;
  const currentPlan = PLANS.find((plan) => {
    return plan.id === planId;
  });

  const [selectedPlan, setSelectedPlan] = useState({
    ...currentPlan,
    qty: 1,
    planPrice: currentPlan.price,
  });
  const [showModal, setShowModal] = useState(false);

  let planTotalPrice;

  planTotalPrice = selectedPlan.planPrice * selectedPlan.qty;

  function handlePlanChange(event) {
    const enteredPlanId = event.target.value;

    const newPlan = PLANS.find((plan) => {
      return plan.id === enteredPlanId;
    });
    newPlan.qty = 1;
    newPlan.planPrice = newPlan.price;
    setSelectedPlan(newPlan);
  }

  function handleFrequencyChange(event) {
    if (event.target.value === "Weekly") {
      setSelectedPlan((prevPlan) => {
        const updatedPlan = { ...prevPlan, planPrice: prevPlan.price / 4 };
        return updatedPlan;
      });
    } else if (event.target.value === "Monthly") {
      setSelectedPlan((prevPlan) => {
        const updatedPlan = { ...prevPlan, planPrice: prevPlan.price };
        return updatedPlan;
      });
    }
    planTotalPrice = selectedPlan.planPrice * selectedPlan.qty;
  }

  function handleQtyChange(event) {
    setSelectedPlan((prevPlan) => {
      const updatedPlan = { ...prevPlan, qty: event.target.value };
      return updatedPlan;
    });
  }

  function handlePlanTypeChange(event) {
    const newPlan = PLANS.filter((plan) => plan.type === event.target.value)[0];
    newPlan.qty = 1;
    newPlan.planPrice = newPlan.price;
    setSelectedPlan(newPlan);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <div className={`${classes["page-container"]} `}>
      {showModal && (
        <div
          className={`${showModal ? classes.overlay : undefined}`}
          onClick={handleCloseModal}
        >
          <Modal onCloseModal={handleCloseModal} />
        </div>
      )}
      <h1 className={classes.heading}>Select your plan</h1>
      <div className={classes.container}>
        <section className={classes["left-container"]}>
          <h2>Plan Details</h2>
          <h3>
            {selectedPlan.type === "veg" ? "Vegetarian " : "Non-Vegetarian "}
            {selectedPlan.name} Plan
          </h3>

          <h4>Items Included</h4>
          <div className={classes["plan-details-container"]}>
            <div className={classes["plan-items"]}>
              <div className={classes["plan-img-container"]}>
                <img src={selectedPlan.image} alt={selectedPlan.name} />
              </div>
              <ul>
                {selectedPlan.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {selectedPlan.description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
        </section>

        <section className={classes["right-container"]}>
          <h2>Price Summary</h2>
          <form onSubmit={handleSubmit}>
            <div className={classes["plan-sub-form"]}>
              <div className={classes["input-group"]}>
                <label htmlFor="type">Plan Type</label>
                <select
                  id="type"
                  name="type"
                  required
                  onChange={handlePlanTypeChange}
                >
                  <option value="veg" selected={selectedPlan.type === "veg"}>
                    Vegetarian
                  </option>
                  <option
                    value="non-veg"
                    selected={selectedPlan.type === "non-veg"}
                  >
                    Non-Vegetarian
                  </option>
                </select>
              </div>
              <div className={classes["input-group"]}>
                <label htmlFor="name">Plan name</label>
                <select
                  id="name"
                  name="name"
                  required
                  onChange={handlePlanChange}
                >
                  {PLANS.filter((plan) => plan.type === selectedPlan.type).map(
                    (plan) => (
                      <option
                        key={plan.id}
                        value={plan.id}
                        selected={selectedPlan.id === plan.id}
                      >
                        {plan.name}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div className={classes["input-group"]}>
                <label htmlFor="frequency">Frequency</label>
                <select
                  id="frequency"
                  name="frequency"
                  required
                  onChange={handleFrequencyChange}
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
                  value={selectedPlan.qty}
                  id="qty"
                  name="qty"
                  min="1"
                  required
                  onChange={handleQtyChange}
                />
              </div>
            </div>
            <div className={classes["sub-container"]}>
              <p>
                Plan Name:
                <span className={classes.values}>{selectedPlan.name}</span>
              </p>
              <p>
                Plan Price:
                <span className={classes.values}>
                  CAD {selectedPlan.planPrice.toFixed(2)}
                </span>
              </p>
              <p>
                Quantity:
                <span className={classes.values}>{selectedPlan.qty}</span>
              </p>
              <div className={classes["total-price"]}>
                <p>
                  Total Price:{" "}
                  <span className={classes.values}>
                    CAD {planTotalPrice.toFixed(2)}
                  </span>
                </p>
              </div>
            </div>
            <button className={`primary ${classes["order-btn"]}`}>
              Place Order
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
