import styles from "./Technology.module.css";
import React from "react";
import Nav from "components/Nav";

export default function Technology() {
  return (
    <main id={styles.technology}>
      <Nav />
      <article style={{color: "#fff"}}>technology</article>
    </main>
  );
}
