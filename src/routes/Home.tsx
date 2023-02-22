import React from 'react';
import Text from 'components/Home/Text';
import Button from 'components/Home/Button';
import Nav from 'components/Nav';
import styles from './Home.module.css';

export default function Home() {
  return (
    <main id={styles.home}>
      <Nav />
      <article>
        <Text />
        <Button />
      </article>
    </main>
  );
}
