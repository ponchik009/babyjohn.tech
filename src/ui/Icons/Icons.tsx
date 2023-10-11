import React from "react";
import classNames from "classnames";

import styles from "./Icons.module.scss";

import { Row } from "ui/Row/Row";

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
    <Row className={classNames(styles.icons, className)} {...props}>
      {children}
    </Row>
  );
};
