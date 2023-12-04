import React from "react";

import styles from "./Header.module.scss";

import { ReactComponent as IconBurger } from "assets/icons/IconBurger.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h3 className={styles.title}>Babyjohn.tech</h3>

      {/* <button>
        <IconBurger />
      </button> */}
    </header>
  );
};
