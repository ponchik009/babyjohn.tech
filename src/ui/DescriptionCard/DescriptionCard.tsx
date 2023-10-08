import React from "react";

import classNames from "classnames";

import styles from "./DescriptionCard.module.scss";
import { ItemTitle } from "ui/ItemTitle/ItemTitle";

interface IDescriptionCardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  titleText?: string | JSX.Element;
  icons?: { icon: JSX.Element; href: string }[];
  text?: string;
}

export const DescriptionCard: React.FC<IDescriptionCardProps> = ({
  className,
  titleText,
  icons,
  text,
  ...props
}) => {
  return (
    <div className={classNames(styles.card, className)} {...props}>
      <div className={styles.card__backdrop}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {(titleText || icons) && (
        <div className={styles.card__titleWrapper}>
          {titleText && <ItemTitle>{titleText}</ItemTitle>}

          {icons && (
            <div className={classNames(styles.personIcons, styles.card__icons)}>
              {icons.map((item) => (
                <a href={item.href} target="_blank">
                  {item.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
      <p className={styles.card__text}>{text}</p>
    </div>
  );
};
