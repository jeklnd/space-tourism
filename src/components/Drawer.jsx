import React from "react";
import styles from "components/Drawer.module.css";
import { useState } from "react";
import PropTypes from "prop-types";

export function toggleDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  if (isOpen === false) {
    setIsOpen(true);
    console.log("toggled drawer")
  } else {
    setIsOpen(false);
    console.log("toggled drawer")
  }
}

export function Drawer({ isOpen }) {
  if (isOpen) {
    return <div className={styles.drawer}>Drawer</div>;
  }
}

Drawer.propTypes = {
  isOpen: PropTypes.bool,
};
