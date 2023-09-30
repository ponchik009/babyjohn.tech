import React from "react";

import classNames from "classnames";

import styles from "./Persons.module.scss";

interface IPersonsProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  active: number;
  persons: { src: string; alt: string }[];
  onPersonClick: (index: number) => void;
}

export const Persons: React.FC<IPersonsProps> = ({
  active,
  onPersonClick,
  persons,
}) => {
  return (
    <div className={styles.persons}>
      {persons.map((person, index) => (
        <div
          className={classNames(styles.personWrapper, {
            [styles.personWrapperActive]: index === active,
          })}
          key={index}
          onClick={() => onPersonClick(index)}
        >
          <div className={styles.person}>
            <img src={person.src} alt={person.alt} />
          </div>
          <span className={styles.personName}>{person.alt}</span>
        </div>
      ))}
    </div>
  );
};
