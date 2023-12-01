import classes from "./SubscriptionForm.module.css";
function SubscriptionForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);
  }
  return (
    <div>
      <h1>Customize your plan</h1>
      <form className={classes["form-sec"]} onSubmit={handleSubmit}>
        <div className={classes["form-input"]}>
          <label htmlFor="plan-name">Plan name</label>
          <select id="plan-name" name="plan-name" required>
            <option value="Basic">Basic</option>
            <option value="Regular">Regular</option>
            <option value="Premium">Premium</option>
            <option value="Deluxe">Deluxe</option>
          </select>
        </div>
        <div className={classes["form-input"]}>
          <label htmlFor="frequency">Frequency</label>
          <select id="frequency" name="frequency" required>
            <option value="Monthly">Monthly</option>
            <option value="Weekly">Weekly</option>
          </select>
        </div>
        <div className={classes["form-input"]}>
          <label htmlFor="start-date">Select Start Date</label>
          <input type="date" id="start-date" name="start-date" required />
        </div>
        <div className={classes["form-input"]}>
          <label htmlFor="qty">Quantity</label>
          <input type="number" id="qty" name="qty" min="1" required />
        </div>
        <div className={classes["form-buttons"]}>
          <button className="primary">Place Order</button>
        </div>
      </form>
    </div>
  );
}

export default SubscriptionForm;
