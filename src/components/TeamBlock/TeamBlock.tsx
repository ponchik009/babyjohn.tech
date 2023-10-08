import React from "react";

import styles from "./TeamBlock.module.scss";

import { ReactComponent as IconTeamBgFirst } from "assets/icons/IconTeamBgFirst.svg";
import { ReactComponent as IconTeamBgSecond } from "assets/icons/IconTeamBgSecond.svg";

import { Persons } from "./Persons/Persons";
import { PersonInfo } from "./PersonInfo/PersonInfo";

import { data } from "data/team.data";

// ui
import { Title } from "ui/Title/Title";

export const TeamBlock = () => {
  const [persons, setPersons] = React.useState(data);

  const [active, setActive] = React.useState(0);

  const bgRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // паралаксик
    const callback = () => {
      const top =
        (document.documentElement.scrollTop - window.innerHeight + 200) * 0.3;

      if (top < 0) {
        return;
      }

      if (bgRef.current) {
        bgRef.current.style.top = `${top}px`;
      }
    };

    window.addEventListener("scroll", callback);

    return () => {
      window.removeEventListener("scroll", callback);
    };
  }, []);

  return (
    <div className={styles.teamBlockWrapper}>
      <div className={styles.teamBlock}>
        <div className={styles.teamBlock__innerWrapper} ref={bgRef}>
          <IconTeamBgFirst className={styles.bgFirst} />
          <IconTeamBgSecond className={styles.bgFirst} />
        </div>
        <Title>О команде</Title>
        <div className={styles.personsContainer}>
          <Persons
            active={active}
            onPersonClick={setActive}
            persons={persons}
          />
          <PersonInfo person={persons[active]} />
        </div>
      </div>
    </div>
  );
};
