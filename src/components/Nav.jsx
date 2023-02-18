import React from "react";
import logo from "assets/images/shared/logo.svg";
import hamburger from "assets/images/shared/icon-hamburger.svg";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import { Drawer, toggleDrawer } from "components/Drawer";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";


export default function Nav() {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/home") {
      setActiveIndex(0);
    } else if (location.pathname.includes("/destination")) {
      setActiveIndex(1);
    } else if (location.pathname === "/crew") {
      setActiveIndex(2);
    } else {
      setActiveIndex(3);
    }
  }, [location.pathname]);

  const pages = [
    { id: 0, name: "HOME", number: "01", href: "/home" },
    { id: 1, name: "DESTINATION", number: "02", href: "/destination/moon" },
    { id: 2, name: "CREW", number: "03", href: "/crew" },
    { id: 3, name: "TECHNOLOGY", number: "04", href: "/technology" },
  ];

  const listItems = pages.map((page, index) => {
    return (
      <Li
        key={page.id}
        isActive={activeIndex === index}
        // onClick={() => setActiveIndex(index)}
        className={styles.li}
        href={page.href}
        number={page.number}
        name={page.name}
      ></Li>
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
      <img
        className={styles.hamburger}
        src={hamburger}
        alt="hamburger"
        onClick={toggleDrawer}
      ></img>
      <Drawer isOpen={false} />
    </nav>
  );
}

function Li({ isActive, href, number, name }) {
  return (
    <li className={styles.li}>
      <NavLink to={href} className={isActive ? `${styles.active}` : null}>
        <span>{number}</span>
        {name}
      </NavLink>
    </li>
  );
}

Li.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  name: PropTypes.string,
  href: PropTypes.string,
  number: PropTypes.string,
};
