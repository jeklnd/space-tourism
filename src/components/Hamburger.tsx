import React from "react";
import styles from "./Hamburger.module.css";
import hamburger from "assets/images/shared/icon-hamburger.svg";

export default function Hamburger({ onClick }: Props) {
  return (
    <>
      <img
        className={styles.hamburger}
        src={hamburger}
        alt="hamburger"
        onClick={onClick}
      />
    </>
  );
}

interface Props {
  onClick?: () => void;
}
