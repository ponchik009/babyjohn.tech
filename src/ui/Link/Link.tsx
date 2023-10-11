import React from "react";
import classNames from "classnames";

import styles from "./Link.module.scss";

interface ILinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

export const Link: React.FC<ILinkProps> = ({
  children,
  className,
  target = "_blank",
  ...props
}) => {
  return (
    <a
      className={classNames(styles.link, className)}
      target={target}
      {...props}
    >
      {children}
    </a>
  );
};
