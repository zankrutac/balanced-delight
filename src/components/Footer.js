import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes["footer-container"]}>
      <div className={classes["socials-container"]}>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-facebook"></i>
      </div>
      <ul className={classes["footer-links"]}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="plans">Plans</Link>
        </li>
        <li>
          <Link to="about-us">About Us</Link>
        </li>
        <li>
          <Link>Contact Us</Link>
        </li>
      </ul>
      <p className={classes.copyright}>
        Website developed by Balanced Delights company &copy;. All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;
