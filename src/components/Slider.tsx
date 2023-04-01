import React, { useEffect } from "react";
import styles from "components/Slider.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { people } from "data.js";
import { useLocation } from "react-router-dom";

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/crew/shuttleworth") {
      setActiveIndex(1);
    } else if (location.pathname === "/crew/glover") {
      setActiveIndex(2);
    } else if (location.pathname === "/crew/ansari") {
      setActiveIndex(3);
    } else {
      setActiveIndex(0);
    }
  }, [location.pathname]);

  return (
    <>
      <ul className={styles.ul}>
        {people.map((person, index) => (
          <Li
            key={person.id}
            className={styles.ul}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
            name={person.last.toLowerCase()}
          ></Li>
        ))}
      </ul>
    </>
  );
}

interface Props {
  isActive: boolean,
  onClick: () => void, 
  name: string
  className?: string
}

function Li({ isActive, onClick, name }: Props) {
  return (
    <li className={styles.li} onClick={onClick}>
      <NavLink className={styles.nav_link} to={`/crew/${name}`}>
        <svg viewBox="0 0 15 15">
          <circle
            className={isActive ? styles.active : styles.circle}
            cx="7.5"
            cy="7.5"
            r="7.5"
            fill="#ffffff"
          />
        </svg>
      </NavLink>
    </li>
  );
}