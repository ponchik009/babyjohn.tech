import React from "react";

import styles from "./ItemTitle.module.scss";
import classNames from "classnames";

interface IItemTitleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

export const ItemTitle: React.FC<IItemTitleProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <h5 className={classNames(styles.itemTitle, className)} {...props}>
      {children}
    </h5>
  );
};
