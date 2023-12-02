import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

import styles from "./CasesList.module.scss";

import classNames from "classnames";
import { CasesItem } from "../CasesItem/CasesItem";

interface ICasesListProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  cases: {
    name: string;
    description: string;
    source: { icon: JSX.Element; href: string }[];
    participants: { href: string; title: string }[];
    stack: JSX.Element[];
    image: string;
  }[];
}

export const CasesList: React.FC<ICasesListProps> = ({
  className,
  cases,
  ...props
}) => {
  return (
    <SimpleBar
      className={classNames(styles.casesList, className)}
      forceVisible="x"
      autoHide={false}
    >
      {/* <div className={classNames(styles.casesList, className)} {...props}> */}
      {cases.map((project, index) => (
        <CasesItem
          icons={project.source}
          text={project.description}
          titleText={project.name}
          participants={project.participants}
          key={index}
          mainImage={project.image}
        />
      ))}
      {/* </div> */}
    </SimpleBar>
  );
};
