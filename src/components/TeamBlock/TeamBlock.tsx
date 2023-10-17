import React from "react";

import styles from "./TeamBlock.module.scss";

import { Persons } from "./Persons/Persons";
import { PersonInfo } from "./PersonInfo/PersonInfo";

import { data } from "data/team.data";

// ui
import { Title } from "ui/Title/Title";

export const TeamBlock = () => {
  const [persons, setPersons] = React.useState(data);

  const [active, setActive] = React.useState(0);

  return (
    <div className={styles.teamBlockWrapper}>
      <div className={styles.teamBlock}>
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
