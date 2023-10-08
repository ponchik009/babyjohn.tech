import React from "react";

import styles from "./CasesItem.module.scss";
import { ItemTitle } from "ui/ItemTitle/ItemTitle";
import { DescriptionCard } from "ui/DescriptionCard/DescriptionCard";
import classNames from "classnames";
import { Icons } from "ui/Icons/Icons";

interface ICaseProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  titleText: string;
  text: string;
  icons: { icon: JSX.Element; href: string }[];
}

export const CasesItem: React.FC<ICaseProps> = ({
  className,
  titleText,
  text,
  icons,
  ...props
}) => {
  return (
    <div
      className={classNames(styles.casesItem__Top__Right, className)}
      {...props}
    >
      <ItemTitle>{titleText}</ItemTitle>
      <DescriptionCard text={text} />
      <Icons>
        {icons.map((icon) => (
          <a href={icon.href} target="_blank">
            {icon.icon}
          </a>
        ))}
      </Icons>
    </div>
  );
};
