import styles from "./Crew.module.css";
import Nav from "components/Nav";
import Slider from "components/Slider";
import { useLocation } from "react-router-dom";
import { hurley, shuttleworth, glover, ansari } from "data.js";
import hurley_img from "assets/images/crew/image-douglas-hurley.webp";
import shuttleworth_img from "assets/images/crew/image-mark-shuttleworth.webp";
import glover_img from "assets/images/crew/image-victor-glover.webp";
import ansari_img from "assets/images/crew/image-anousheh-ansari.webp";
import { Helmet } from "react-helmet";

export default function Crew() {
  const location = useLocation();
  // console.log(location);
  let person;
  let img;
  if (location.pathname === "/crew/ansari") {
    person = ansari;
    img = ansari_img;
  } else if (location.pathname === "/crew/shuttleworth") {
    person = shuttleworth;
    img = shuttleworth_img;
  } else if (location.pathname === "/crew/glover") {
    person = glover;
    img = glover_img;
  } else {
    person = hurley;
    img = hurley_img;
  }
  return (
    <>
      <Helmet>
        <link
          rel="preload"
          href="src/assets/images/technology/background-technology-desktop.webp"
          as="image"
        />
      </Helmet>
      <main id={styles.crew}>
        <Nav />
        <div className={styles.center}>
          <article className={styles.display}>
            <h2 className={styles.section_header}>
              <span>02</span>
              {"meet your crew".toUpperCase()}
            </h2>
            <div className={styles.img_container}>
              <img src={img} className={styles.img} alt="crew member"></img>
            </div>

            <Slider />
            <div className={styles.content}>
              <h1 className={styles.content_subheader}>
                {person.role.toUpperCase()}
              </h1>
              <h1 className={styles.content_header}>
                {`${person.first.toUpperCase()} ${person.last.toUpperCase()}`}
              </h1>
              <p className={styles.content_body}>{person.description}</p>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
