import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import classes from "./MainNavigation.module.css";
import { useState } from "react";

export default function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen((prevState) => setIsMenuOpen(!prevState));
  }

  function handleCloseMobileMenu() {
    setIsMenuOpen(false);
  }
  return (
    <header className={classes["navbar-container"]}>
      <Link to="/">
        <img className={classes.logo} src={logo} alt="Balanced Delights" />
      </Link>

      <nav>
        <ul className={`${classes.nav} ${isMenuOpen ? classes.open : ""}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              onClick={handleCloseMobileMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/plans"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              onClick={handleCloseMobileMenu}
            >
              Plans
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              onClick={handleCloseMobileMenu}
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>
      <button className={classes["menu-icon"]} onClick={handleToggleMenu}>
        <i
          className={
            isMenuOpen ? "fa-solid fa-xmark fa-xl" : "fa-solid fa-bars fa-xl"
          }
        ></i>
      </button>
    </header>
  );
}
