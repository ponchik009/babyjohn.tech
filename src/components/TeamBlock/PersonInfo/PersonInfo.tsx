import React from "react";

import styles from "./PersonInfo.module.scss";
import classNames from "classnames";

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
          {person.contacts.map((contact) => (
            <a href={contact.href} target="_blank">
              {contact.icon}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.personInfo}>
        <div className={styles.personInfo__backdrop}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={styles.personInfo__titleWrapper}>
          <h5 className={styles.personInfoTitle}>{person.title}</h5>

          <div
            className={classNames(styles.personIcons, styles.personInfo__icons)}
          >
            {person.portfolio.map((item) => (
              <a href={item.href} target="_blank">
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <p className={styles.personInfoText}>{person.info}</p>
      </div>
    </div>
  );
};
