// import styles from "../components/App.module.css";
import React from "react";
import styles from "./Destination.module.css";
import Nav from "components/Nav";
import Subnav from "components/Subnav";
import moon from "assets/images/destination/image-moon.webp";

export default function Destination() {
  return (
    <main id={styles.destination}>
      <Nav />
      <h5><span>01</span> Pick Your Destination</h5>
      <article style={{color: "#fff"}}>
        <img src={moon}></img>
        <Subnav />
      </article>
    </main>
  );
}
