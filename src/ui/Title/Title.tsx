import React from "react";

import classNames from "classnames";

import styles from "./Title.module.scss";

interface ITitleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

export const Title: React.FC<ITitleProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <h3 className={classNames(styles.title, className)} {...props}>
      {children}
    </h3>
  );
};
