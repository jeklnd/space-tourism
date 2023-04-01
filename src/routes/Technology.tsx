import styles from "./Technology.module.css";
import React from "react";
import Nav from "components/Nav";
import BigSlider from "components/BigSlider";
import { useLocation } from "react-router-dom";
import { vehicle, spaceport, capsule } from "data.js";
import launch_img from "assets/images/technology/image-launch-vehicle-landscape.webp";
import spaceport_img from "assets/images/technology/image-spaceport-landscape.jpg";
import capsule_img from "assets/images/technology/image-space-capsule-landscape.jpg";
import launch_img_portrait from "assets/images/technology/image-launch-vehicle-portrait.jpg";
import spaceport_img_portrait from "assets/images/technology/image-spaceport-portrait.jpg";
import capsule_portrait from "assets/images/technology/image-space-capsule-portrait.jpg";

export default function Technology() {
  const location = useLocation();
  // console.log(location);
  let tech;
  let img;
  let portrait_img;
  if (location.pathname === "/technology/spaceport") {
    tech = spaceport;
    img = spaceport_img;
    portrait_img = spaceport_img_portrait;
  } else if (location.pathname === "/technology/space-capsule") {
    tech = capsule;
    img = capsule_img;
    portrait_img = capsule_portrait;
  } else {
    tech = vehicle;
    img = launch_img;
    portrait_img = launch_img_portrait;
  }
  return (
    <main id={styles.technology}>
      <Nav />
      <div className={styles.center}>
        <article className={styles.display}>
          <h2 className={styles.section_header}>
            <span>03</span>
            {"Space Launch 101".toUpperCase()}
          </h2>
          <div className={styles.img_container}>
            <img src={img} className={styles.img} alt=""></img>
            <img src={portrait_img} className={styles.portrait_img} alt=""></img>
          </div>

          <BigSlider />
          <div className={styles.content}>
            <h1 className={styles.content_subheader}>THE TERMINOLOGY...</h1>
            <h1 className={styles.content_header}>{tech.name.toUpperCase()}</h1>
            <p className={styles.content_body}>{tech.description}</p>
          </div>
        </article>
      </div>
    </main>
  );
}
