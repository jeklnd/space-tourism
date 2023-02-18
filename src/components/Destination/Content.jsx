import React from "react";
import styles from "routes/Destination.module.css";
import { useLocation } from "react-router-dom";
import { moon, mars, europa, titan } from "data.js";

export default function Content() {
  const location = useLocation();
  let planet;
  if (location.pathname === "/destination/moon") {
    planet = moon;
  } else if (location.pathname === "/destination/mars") {
    planet = mars;
  } else if (location.pathname === "/destination/europa") {
    planet = europa;
  } else {
    planet = titan;
  }
  return (
    <>
      {/* <h1>{objescts.name}</h1> */}
      <h2>{planet.name.toUpperCase()}</h2>
      <p className={styles.body}>{planet.description}</p>

      <div className={styles.travel_details}>
        <div>
          <p className={styles.subheading_2}>{"avg. distance".toUpperCase()}</p>
          <p className={styles.subheading_1}>{planet.distance.toUpperCase()}</p>
        </div>
        <div>
          <p className={styles.subheading_2}>
            {"EST. travel time".toUpperCase()}
          </p>
          <p className={styles.subheading_1}>{planet.time.toUpperCase()}</p>
        </div>
      </div>
    </>
  );
}
