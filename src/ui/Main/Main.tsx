import React from "react";

import styles from "./Main.module.css";
import classNames from "classnames";

interface IMainProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export const Main = React.forwardRef<HTMLDivElement, IMainProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <main className={classNames(styles.main, className)} {...props} ref={ref}>
        {children}
      </main>
    );
  }
);
