import React from "react";

// assets
import CaseMooncakes from "assets/img/CaseMooncakes.png";

import { ReactComponent as IconStackPhotoshop } from "assets/icons/IconStackPhotoshop.svg";
import { ReactComponent as IconStackAdobeIllustrator } from "assets/icons/IconStackAdobeIllustrator.svg";
import { ReactComponent as IconStackFigma } from "assets/icons/IconStackFigma.svg";

import { ReactComponent as IconSourceWeb } from "assets/icons/IconSourceWeb.svg";
import { ReactComponent as IconSourceFigma } from "assets/icons/IconStackFigma.svg";

export const data = [
  {
    name: "Сайт для кондитерской “Mooncakes”",
    description:
      "Яркий лендинг, сделанный на Tilda. Включает в себя приврекательный дизайн, адаптив и анимации",
    stack: [
      <IconStackPhotoshop title="Adobe Photoshop" className="Adobe" />,
      <IconStackAdobeIllustrator title="Abobe Illustrator" className="Adobe" />,
      <IconStackFigma title="Figma" />,
    ],
    source: [
      {
        icon: <IconSourceFigma />,
        href: "https://www.figma.com/file/AEbLaFSvD01JNiZ8II4fzP/mooncakes-landing?type=design&node-id=0-1&mode=design&t=0KpKSMFfr10eRdq2-0",
      },
      {
        icon: <IconSourceWeb />,
        href: "https://mooncakes.store",
      },
    ],
    image: CaseMooncakes,
  },
  {
    name: "Сайт для кондитерской “Mooncakes”",
    description:
      "Яркий лендинг, сделанный на Tilda. Включает в себя приврекательный дизайн, адаптив и анимации",
    stack: [
      <IconStackPhotoshop title="Adobe Photoshop" className="Adobe" />,
      <IconStackAdobeIllustrator title="Abobe Illustrator" className="Adobe" />,
      <IconStackFigma title="Figma" />,
    ],
    source: [
      {
        icon: <IconSourceFigma />,
        href: "https://www.figma.com/file/AEbLaFSvD01JNiZ8II4fzP/mooncakes-landing?type=design&node-id=0-1&mode=design&t=0KpKSMFfr10eRdq2-0",
      },
      {
        icon: <IconSourceWeb />,
        href: "https://mooncakes.store",
      },
    ],
    image: CaseMooncakes,
  },
];
