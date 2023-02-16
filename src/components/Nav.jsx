import React from "react";
import logo from "assets/images/shared/logo.svg";
import hamburger from "assets/images/shared/icon-hamburger.svg";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

function Nav() {
  const pages = [
    { id: 0, name: "HOME", number: "01", href: "/home" },
    { id: 1, name: "DESTINATION", number: "02", href: "/destination" },
    { id: 2, name: "CREW", number: "03", href: "/crew" },
    { id: 3, name: "TECHNOLOGY", number: "04", href: "/technology" },
  ];

  const listItems = pages.map((page) => (
    <li key={page.id}>
      <NavLink to={page.href}>
        <span>{page.number}</span>
        {page.name}
      </NavLink>
    </li>
  ));

  return (
    <nav>
      <img id={styles.logo} src={logo} alt="logo" className={styles.logo}></img>
      <div id={styles.line}></div>
      <ul>{listItems}</ul>
      <img className={styles.hamburger} src={hamburger} alt="hamburger"></img>
    </nav>
  );
}

export default Nav;
