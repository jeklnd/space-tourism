import Nav from "./Nav";
import Text from "./Text";
import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <section id={styles.home}>
        <header>
          <Nav />
        </header>
        <main>
          <article id={styles.landing}>
            <Text />
            <Button />
          </article>
        </main>
      </section>
    </div>
  );
}

export default App;
