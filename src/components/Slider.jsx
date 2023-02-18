import React from "react";
import styles from "components/Slider.module.css";

function Dot() {
  return (
    <svg viewBox="0 0 15 15">
      <circle cx="7.5" cy="7.5" r="7.5" fill="#fff" />
    </svg>
  );
}

export default function Slider() {
  return (
    <>
      <ul>
        {[...Array(4)].map((dot, index) => (
          <li key={index} className={styles.dot}>
            <Dot className={styles.svg} />
          </li>
        ))}
      </ul>
    </>
  );
}
