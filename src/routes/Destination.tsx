import styles from "./Destination.module.css";
import Nav from "components/Nav";
import Content from "components/Destination/Content";
import { Outlet, useLocation } from "react-router-dom";
export default function Destination() {
  const location = useLocation();
  return (
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
  );
}
