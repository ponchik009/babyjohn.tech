import React, { useEffect, useRef, useState } from "react";
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
  const containerRef = useRef<HTMLDivElement>();

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState<number | null>(null);
  const [scrollLeft, setScrollLeft] = useState<number | null>(null);

  const [velX, setVelX] = useState(0);
  const [momentumID, setMomentumID] = useState<number | null>(null);

  function beginMomentumTracking() {
    cancelMomentumTracking();
    setMomentumID(requestAnimationFrame(momentumLoop));
  }

  function cancelMomentumTracking() {
    if (momentumID) {
      cancelAnimationFrame(momentumID);
    }
  }

  function momentumLoop() {
    if (containerRef.current) {
      containerRef.current.scrollLeft += velX;

      setVelX((prev) => {
        const newValue = prev * 0.85;

        if (Math.abs(newValue) > 0.5) {
          setMomentumID(requestAnimationFrame(momentumLoop));
        }

        return newValue;
      });
    }
  }

  return (
    <SimpleBar
      className={classNames(styles.casesList, className)}
      forceVisible="x"
      autoHide={false}
      scrollableNodeProps={{ ref: containerRef }}
      onMouseDown={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const y = e.clientY;
        const posY = y - rect.top;
        const height = containerRef.current?.clientHeight || Infinity;

        // высота скролла и класс контейнера
        if (height - posY <= 11) {
          return;
        }

        if (e.button === 1) {
          return;
        }

        if (containerRef.current) {
          setIsDown(true);
          setStartX(e.pageX - containerRef.current.offsetLeft);
          setScrollLeft(containerRef.current.scrollLeft);
          containerRef.current.style.cursor = "grabbing";
        }

        cancelMomentumTracking();
      }}
      onMouseUp={() => {
        setIsDown(false);

        if (containerRef.current) {
          containerRef.current.style.cursor = "grab";
        }

        beginMomentumTracking();
      }}
      onMouseMove={(e) => {
        if (!isDown) {
          return;
        }

        e.preventDefault();

        if (containerRef.current && startX !== null && scrollLeft !== null) {
          const x = e.pageX - containerRef.current.offsetLeft;
          const walkX = (x - startX) * 1;

          const prevScrollLeft = containerRef.current.scrollLeft;
          containerRef.current.scrollLeft = scrollLeft - walkX;
          setVelX(containerRef.current.scrollLeft - prevScrollLeft);
        }
      }}
      onWheel={cancelMomentumTracking}
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
