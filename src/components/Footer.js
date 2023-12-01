import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/plans">Plans</Link>
        </li>
        <li>
          <Link to="aboutus">About Us</Link>
        </li>
        <li>
          <Link>Contact Us</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
