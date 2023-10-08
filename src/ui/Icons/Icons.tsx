import React, { Children } from "react";

import styles from "./Icons.module.scss";
import classNames from "classnames";

interface IIconsProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export const Icons: React.FC<IIconsProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={classNames(styles.icons, className)} {...props}>
      {children}
    </div>
  );
};
