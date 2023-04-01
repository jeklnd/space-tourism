import React from "react";
import styles from "components/Drawer.module.css";
import { NavLink } from "react-router-dom";
import { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { pages } from "data.js";

// interface Props {
//     isOpen?: boolean;
// }

export default function Drawer() {
  const [activeIndex, setActiveIndex] = useState(0);

  const location = useLocation();
  useMemo(() => {
    if (location.pathname.includes("/destination")) {
      setActiveIndex(1);
    } else if (location.pathname.includes("/crew")) {
      setActiveIndex(2);
    } else if (location.pathname.includes("/technology")) {
      setActiveIndex(3);
    } else {
      setActiveIndex(0);
    }
  }, [location.pathname]);

  const listItems = pages.map((page, index) => {
    return (
      <Li
        key={page.id}
        isActive={activeIndex === index}
        className={styles.li}
        href={page.href}
        number={page.number}
        name={page.name}
      ></Li>
    );
  });

  return (
    <div className={styles.drawer}>
      <ul className={styles.ul}>{listItems}</ul>
    </div>
  );
}

interface Props {
  isActive: boolean;
  href: string;
  number: string;
  name: string;
  className?: string;
}

function Li({ isActive, href, number, name }: Props) {
  return (
    <li className={styles.li}>
      <NavLink to={href} className={isActive ? `${styles.active}` : undefined}>
        <span>{number}</span>
        {name}
      </NavLink>
    </li>
  );
}
