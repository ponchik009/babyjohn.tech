import React from "react";
import classNames from "classnames";

import styles from "./Row.module.scss";

interface IRowProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export const Row: React.FC<IRowProps> = ({ className, children, ...props }) => {
  return (
    <div className={classNames(styles.row, className)} {...props}>
      {children}
    </div>
  );
};
