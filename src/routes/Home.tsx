import Text from "components/Home/Text";
import Button from "components/Home/Button";
import Nav from "components/Nav";
import styles from "./Home.module.css";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <link
          rel="preload"
          href="assets/images/home/enlarged-home.webp"
          as="image"
        />
      </Helmet>
      <main id={styles.home}>
        <Nav />
        <article>
          <Text />
          <Button />
        </article>
      </main>
    </>
  );
}
