import React from "react";

import styles from "./BackgroundBlock.module.scss";

import { ReactComponent as IconBgFirst } from "assets/icons/IconBgFirst.svg";
import { ReactComponent as IconBgSecond } from "assets/icons/IconBgSecond.svg";
import { ReactComponent as IconBgThird } from "assets/icons/IconBgThird.svg";

export const BackgroundBlock = () => {
  const bgRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // паралаксик
    const callback = () => {
      const top = document.documentElement.scrollTop - window.innerHeight;

      // если не выше, чем 1 / 10 страницы
      if (-top > window.innerHeight / 10) {
        return;
      }

      const offset = (top + 200) * 0.5;

      if (offset < 0) {
        return;
      }

      if (bgRef.current) {
        bgRef.current.style.top = `calc(${offset}px + 90vh)`;
      }
    };

    window.addEventListener("scroll", callback);

    return () => {
      window.removeEventListener("scroll", callback);
    };
  }, []);

  return (
    <div className={styles.bgBlock} ref={bgRef}>
      <IconBgFirst className={styles.bg} />
      <IconBgSecond className={styles.bg} />
      <IconBgThird
        className={styles.bg}
        style={{ marginTop: -200, width: "90%" }}
      />
    </div>
  );
};
