import styles from "./Destination.module.css";
import Nav from "components/Nav";
import Content from "components/Destination/Content";
import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Destination() {
  const location = useLocation();
  return (
    <>
      <Helmet>
        <link
          rel="preload"
          href="src/assets/images/technology/background-technology-desktop.webp"
          as="image"
        />
      </Helmet>
      <main id={styles.destination}>
        <Nav />
        <div className={styles.grid}>
          <h5>
            <span>01</span> {"Pick Your Destination".toUpperCase()}
          </h5>
          <article>
            {location.pathname === "/destination" ? <Content /> : <Outlet />}
          </article>
        </div>
      </main>
    </>
  );
}
