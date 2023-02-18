import styles from "./Crew.module.css";
import React from "react";
import Nav from "components/Nav";
import Slider from "components/Slider";
import img from "assets/images/crew/image-douglas-hurley.webp";

export default function Crew() {
  return (
    <main id={styles.crew}>
      <Nav />
      <article className={styles.flex}>
        <h2 className={styles.section_header}>
          <span>02</span>
          {"meet your crew".toUpperCase()}
        </h2>
        <img src={img} className={`styles.img`}></img>
        <Slider styleName={styles.slider}/>
        <div className={styles.content}>
          <h1 className={styles.content_subheader}>{"Commander".toUpperCase()}</h1>
          <h1 className={styles.content_header}>{"Douglas Hurley".toUpperCase()}</h1>
          <p className={styles.content_body}>
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </div>
      </article>
    </main>
  );
}
