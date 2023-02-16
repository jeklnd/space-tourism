import styles from "./Crew.module.css";
import React from "react";
import Nav from "components/Nav";

export default function Crew() {
  return (
    <main id={styles.crew}>
      <Nav />
      <article style={{color: "#fff"}}>crew</article>
    </main>
  );
}
