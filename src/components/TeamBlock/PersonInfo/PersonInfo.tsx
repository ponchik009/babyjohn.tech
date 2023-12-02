import React from "react";

import styles from "./PersonInfo.module.scss";
import classNames from "classnames";
import { DescriptionCard } from "ui/DescriptionCard/DescriptionCard";

interface IPersonInfoProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  person: {
    src: string;
    alt: string;
    title: JSX.Element | string;
    info: string;
    stack: JSX.Element[];
    contacts: { icon: JSX.Element; href: string }[];
    portfolio: { icon: JSX.Element; href: string }[];
  };
}

export const PersonInfo: React.FC<IPersonInfoProps> = ({ person }) => {
  return (
    <div className={styles.person}>
      <div className={styles.personTop}>
        <img src={person.src} alt={person.alt} className={styles.personImage} />

        <div
          className={classNames(styles.personIcons, styles.personStack)}
          dir="rtl"
        >
          {person.stack.map((stackIcon) => stackIcon)}
        </div>

        <div className={classNames(styles.personIcons, styles.personContacts)}>
          {person.contacts.map((contact, index) => (
            <a href={contact.href} target="_blank" key={index}>
              {contact.icon}
            </a>
          ))}
        </div>
      </div>

      <DescriptionCard
        titleText={person.title}
        text={person.info}
        icons={person.portfolio}
      />
    </div>
  );
};
