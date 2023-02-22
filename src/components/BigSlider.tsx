import React, { useEffect } from "react";
import styles from "components/BigSlider.module.css";
import { useState } from "react";
// import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { technology } from "data.js";
import { useLocation } from "react-router-dom";

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/technology/spaceport") {
      setActiveIndex(1);
    } else if (location.pathname === "/technology/space-capsule") {
      setActiveIndex(2);
    } else {
      setActiveIndex(0);
    }
  }, [location.pathname]);

  return (
    <>
      <ul className={styles.ul}>
        {technology.map((tech, index) => (
          <Li
            key={tech.id}
            // className={styles.ul}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
            name={tech.name.toLowerCase()}
            number={index + 1}
          ></Li>
        ))}
      </ul>
    </>
  );
}

interface Props {
  isActive: boolean;
  onClick: () => void;
  name: string;
  number: number;
}

function Li({ isActive, onClick, name, number }: Props) {
  return (
    <li className={styles.li} onClick={onClick}>
      <NavLink
        className={styles.nav_link}
        to={`/technology/${name.split(" ").join("-").toLowerCase()}`}
      >
        <svg viewBox="0 0 100 100" className={styles.svg}>
          <circle
            className={isActive ? styles.active : styles.circle}
            cx="50"
            cy="50"
            r="46"
            fill="#000"
            stroke="white"
            strokeWidth="2"
          />
          <text
            className={isActive ? styles.activeText : styles.text}
            x="50"
            y="50"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="white"
            fontSize="30"
          >
            {number}
          </text>
        </svg>
      </NavLink>
    </li>
  );
}

// Li.propTypes = {
//   isActive: PropTypes.bool,
//   onClick: PropTypes.func,
//   name: PropTypes.string,
//   number: PropTypes.number,
// };
