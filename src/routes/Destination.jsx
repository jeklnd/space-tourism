// import styles from "../components/App.module.css";
import React from "react";
import styles from "./Destination.module.css";
import Nav from "components/Nav";
import Subnav from "components/Subnav";
import moon from "assets/images/destination/image-moon.webp";
import Content from "components/Destination/Content";
import { Outlet, useLocation } from "react-router-dom";


export default function Destination() {
  const location = useLocation();
  return (
    <main id={styles.destination}>
      <Nav />
      <div className={styles.grid}>
        <h5>
          <span>01</span> Pick Your Destination
        </h5>
        <article>
          <img src={moon} className={styles.planet}></img>

          <div className={styles.content}>
            <Subnav />
            {location.pathname === "/destination" ? <Content /> : <Outlet />}
          </div>
        </article>
      </div>
    </main>
  );
}
