import React, { useState, useMemo } from "react";
import logo from "assets/images/shared/logo.svg";
import Hamburger from "components/Hamburger";
import styles from "./Nav.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { pages } from "data.js";
import Li from "components/Li";

export default function Nav() {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  useMemo(() => {
    if (location.pathname.includes("/destination")) {
      setActiveIndex(1);
    } else if (location.pathname.includes("/crew")) {
      setActiveIndex(2);
    } else if (location.pathname.includes("/technology")) {
      setActiveIndex(3);
    } else {
      setActiveIndex(0);
    }
  }, [location.pathname]);

  const listItems = pages.map((page, index) => {
    console.log(page.name);
    return (
      <Li key={page.id} className={styles.li}>
        <NavLink
          to={page.href}
          className={activeIndex === index ? `${styles.active}` : undefined}
        >
          <span>{page.number}</span>
          {page.name}
        </NavLink>
      </Li>
    );
  });
  return (
    <nav>
      <NavLink to={"/home"} className={styles.logo_link}>
        <img
          id={styles.logo}
          src={logo}
          alt="logo"
          className={styles.logo}
        ></img>
      </NavLink>
      <div id={styles.line}></div>
      <ul>{listItems}</ul>
      <Hamburger onClick={() => {console.log("click")}} />
    </nav>
  );
}
