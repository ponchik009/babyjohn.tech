import React from "react";
import classNames from "classnames";

import styles from "./CasesItem.module.scss";

import { ItemTitle } from "ui/ItemTitle/ItemTitle";
import { DescriptionCard } from "ui/DescriptionCard/DescriptionCard";
import { Icons } from "ui/Icons/Icons";
import { Row } from "ui/Row/Row";
import { Link } from "ui/Link/Link";

interface ICaseProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  titleText: string;
  text: string;
  icons: { icon: JSX.Element; href: string }[];
  participants: { href: string; title: string }[];
  mainImage: string;
}

export const CasesItem: React.FC<ICaseProps> = ({
  className,
  titleText,
  text,
  icons,
  // participants,
  mainImage,
  ...props
}) => {
  return (
    <div className={classNames(styles.casesItem, className)} {...props}>
      <div className={styles.casesItem__Top}>
        <div className={styles.casesItem__Top__LeftWrapper}>
          <div className={styles.casesItem__Top__Left}>
            <img src={mainImage} alt={titleText} />
          </div>
        </div>
        <div className={styles.casesItem__Top__Right}>
          <ItemTitle>{titleText}</ItemTitle>
          <DescriptionCard text={text} style={{ padding: "20px 25px" }} />
          <Icons style={{ gap: 16 }}>
            {icons.map((icon, index) => (
              <a href={icon.href} target="_blank" key={index}>
                {icon.icon}
              </a>
            ))}
          </Icons>
          {/* <Row>
            {participants.map((p, index) => (
              <Link href={p.href} key={index}>
                {p.title}
              </Link>
            ))}
          </Row> */}
        </div>
      </div>
      <div className={styles.casesItem__Bottom}></div>
    </div>
  );
};
