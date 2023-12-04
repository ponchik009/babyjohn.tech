import React from "react";

// assets
import CaseMooncakes from "assets/img/CaseMooncakes.png";
import CaseCollage from "assets/img/CaseCollage.png";
import CaseCredit from "assets/img/CaseCredit.png";

import { ReactComponent as IconStackPhotoshop } from "assets/icons/IconStackPhotoshop.svg";
import { ReactComponent as IconStackAdobeIllustrator } from "assets/icons/IconStackAdobeIllustrator.svg";
import { ReactComponent as IconStackFigma } from "assets/icons/IconStackFigma.svg";
import { ReactComponent as IconStackReact } from "assets/icons/IconStackReact.svg";
import { ReactComponent as IconStackTypescript } from "assets/icons/IconStackTypescript.svg";
import { ReactComponent as IconStackNodejs } from "assets/icons/IconStackNodejs.svg";
import { ReactComponent as IconStackRedux } from "assets/icons/IconStackRedux.svg";

import { ReactComponent as IconSourceWeb } from "assets/icons/IconSourceWeb.svg";
import { ReactComponent as IconSourceLink } from "assets/icons/IconSourceLink.svg";
import { ReactComponent as IconSourceFigma } from "assets/icons/IconStackFigma.svg";

import { ReactComponent as IconPortfolioGithub } from "assets/icons/IconPortfolioGithub.svg";

export const data = [
  {
    name: "Сайт для кондитерской “Mooncakes”",
    description:
      "Яркий лендинг, сделанный на Tilda. Включает в себя приврекательный дизайн, адаптив и анимации",
    stack: [
      <IconStackPhotoshop title="Adobe Photoshop" className="Adobe" key={0} />,
      <IconStackAdobeIllustrator
        title="Abobe Illustrator"
        className="Adobe"
        key={1}
      />,
      <IconStackFigma title="Figma" key={2} />,
    ],
    source: [
      {
        icon: <IconSourceFigma />,
        href: "https://www.figma.com/file/AEbLaFSvD01JNiZ8II4fzP/mooncakes-landing?type=design&node-id=0-1&mode=design&t=0KpKSMFfr10eRdq2-0",
      },
      {
        icon: <IconSourceLink className="Link" />,
        href: "https://mooncakes.store",
      },
    ],
    image: CaseMooncakes,
    participants: [
      {
        title: "@Таня",
        href: "https://t.me/supressiya",
      },
    ],
  },
  {
    name: "Collage Maker",
    description:
      "Одностраничное приложение, позволяющее делать интересные коллажи",
    stack: [
      <IconStackReact title="React" className="React" />,
      <IconStackTypescript title="Typescript" className="Typescript" />,
      <IconStackNodejs title="NodeJS" />,
    ],
    source: [
      {
        icon: <IconPortfolioGithub className="Github" />,
        href: "https://github.com/ponchik009/collage-maker",
      },
      {
        icon: <IconSourceLink className="Link" />,
        href: "https://collage.babyjohn.tech",
      },
    ],
    image: CaseCollage,
    participants: [
      {
        title: "@Олег",
        href: "https://t.me/luxorylife",
      },
    ],
  },
  {
    name: "Credit Calculator",
    description:
      "Приложение-калькулятор, в котором можно рассчитать свою ипотеку 🤡",
    stack: [
      <IconStackReact title="React" className="React" />,
      <IconStackTypescript title="Typescript" className="Typescript" />,
      <IconStackRedux title="Redux" />,
      <IconStackNodejs title="NodeJS" />,
    ],
    source: [
      {
        icon: <IconPortfolioGithub className="Github" />,
        href: "https://github.com/ponchik009/credit-calc",
      },
      {
        icon: <IconSourceLink className="Link" />,
        href: "https://credit.babyjohn.tech/",
      },
    ],
    image: CaseCredit,
    participants: [
      {
        title: "@Олег",
        href: "https://t.me/luxorylife",
      },
    ],
  },
];
