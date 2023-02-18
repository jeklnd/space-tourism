import React from "react";
import styles from "components/Subnav.module.css";
import { useState } from "react";
import PropTypes from "prop-types";
import { objects } from "data.js";
import { NavLink } from "react-router-dom";

export default function Subnav() {
  const [activeIndex, setActiveIndex] = useState(0);

  const listItems = objects.map((object, index) => {
    return (
      <Li
        key={object.id}
        isActive={activeIndex === index}
        onClick={() => setActiveIndex(index)}
        name={object.name.toUpperCase()}
      />
    );
  });

  return <ul className={styles.ul}>{listItems}</ul>;
}

function Li({ isActive, onClick, name }) {
  return (
    <li
      className={isActive ? `${styles.li} ${styles.active}` : styles.li}
      onClick={onClick}
    >
      <NavLink className={styles.nav_link} to={`/destination/${name.toLowerCase()}`}> {name}</NavLink>
    </li>
  );
}

Li.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  name: PropTypes.string,
};
