import React from "react";
import styles from "components/Destination/Content.module.css";
import { useLocation } from "react-router-dom";
import { moon, mars, europa, titan } from "data.js";
import Subnav from "components/Subnav";
import moon_img from "assets/images/destination/image-moon.webp"
import mars_img from "assets/images/destination/image-mars.webp"
import europa_img from "assets/images/destination/image-europa.webp"
import titan_img from "assets/images/destination/image-titan.webp"


export default function Content() {
  const location = useLocation();
  let planet;
  let img;
  if (location.pathname === "/destination/moon") {
    planet = moon;
    img = moon_img;
  } else if (location.pathname === "/destination/mars") {
    planet = mars;
    img = mars_img;
  } else if (location.pathname === "/destination/europa") {
    planet = europa;
    img = europa_img;
  } else {
    planet = titan;
    img = titan_img;
  }

  return (
    <>
      <img src={img} className={styles.planet} alt="planet"></img>
      <div>
        <Subnav />
        <h2 className={styles.heading}>{planet.name.toUpperCase()}</h2>
        <p className={styles.body}>{planet.description}</p>

        <div className={styles.travel_details}>
          <div>
            <p className={styles.subheading_2}>
              {"avg. distance".toUpperCase()}
            </p>
            <p className={styles.subheading_1}>
              {planet.distance.toUpperCase()}
            </p>
          </div>
          <div>
            <p className={styles.subheading_2}>
              {"EST. travel time".toUpperCase()}
            </p>
            <p className={styles.subheading_1}>{planet.time.toUpperCase()}</p>
          </div>
        </div>
      </div>
    </>
  );
}