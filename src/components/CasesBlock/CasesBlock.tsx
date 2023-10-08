import React from "react";

import styles from "./CasesBlock.module.scss";

import { data } from "data/cases.data";

// ui
import { Title } from "ui/Title/Title";
import { CasesList } from "./CasesList/CasesList";

export const CasesBlock = () => {
  const [cases, setCases] = React.useState(data);

  return (
    <div className={styles.casesWrapper}>
      <Title>Наши кейсы</Title>
      <CasesList cases={cases} />
    </div>
  );
};
