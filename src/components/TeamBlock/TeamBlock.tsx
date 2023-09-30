import React from "react";

import styles from "./TeamBlock.module.scss";

import { ReactComponent as IconTeamBgFirst } from "assets/icons/IconTeamBgFirst.svg";
import { ReactComponent as IconTeamBgSecond } from "assets/icons/IconTeamBgSecond.svg";

import { ReactComponent as IconStackReact } from "assets/icons/IconStackReact.svg";
import { ReactComponent as IconStackTypescript } from "assets/icons/IconStackTypescript.svg";
import { ReactComponent as IconStackRedux } from "assets/icons/IconStackRedux.svg";
import { ReactComponent as IconStackNodejs } from "assets/icons/IconStackNodejs.svg";

import { ReactComponent as IconStackPhotoshop } from "assets/icons/IconStackPhotoshop.svg";
import { ReactComponent as IconStackAdobeIllustrator } from "assets/icons/IconStackAdobeIllustrator.svg";
import { ReactComponent as IconStackFigma } from "assets/icons/IconStackFigma.svg";

import { ReactComponent as IconStackJava } from "assets/icons/IconStackJava.svg";
import { ReactComponent as IconStackSpring } from "assets/icons/IconStackSpring.svg";

import { ReactComponent as IconStackNeutral } from "assets/icons/IconStackNeutral.svg";

import { ReactComponent as IconContactVK } from "assets/icons/IconContactVK.svg";
import { ReactComponent as IconContactTelegram } from "assets/icons/IconContactTelegram.svg";
import { ReactComponent as IconContactEmail } from "assets/icons/IconContactEmail.svg";

import { ReactComponent as IconPortfolioHHru } from "assets/icons/IconPortfolioHHru.svg";
import { ReactComponent as IconPortfolioGithub } from "assets/icons/IconPortfolioGithub.svg";
import { ReactComponent as IconPortfolioBehance } from "assets/icons/IconPortfolioBehance.svg";

import { Persons } from "./Persons/Persons";
import { PersonInfo } from "./PersonInfo/PersonInfo";

import Shrek from "assets/img/1.png";
import Fiona from "assets/img/2.png";
import Donkey from "assets/img/3.png";
import Amogus from "assets/img/Amogus.png";

const data = [
  {
    src: Shrek,
    alt: "Олег",
    title: (
      <>
        Это фронтендер{" "}
        <span>
          {"<"}Олег{">"}
        </span>
      </>
    ),
    info: "Это Олег, и он фронтендер. Олег любит, чтобы все было красиво, и ненавидит PHP. ",
    stack: [
      <IconStackReact title="React" className="React" />,
      <IconStackTypescript title="Typescript" className="Typescript" />,
      <IconStackRedux title="Redux" />,
      <IconStackNodejs title="NodeJS" />,
    ],
    contacts: [
      {
        icon: <IconContactVK className="VK" />,
        href: "https://vk.com/pipipupuinside",
      },
      {
        icon: <IconContactTelegram className="Telegram" />,
        href: "https://t.me/luxorylife",
      },
    ],
    portfolio: [
      {
        icon: <IconPortfolioHHru className="HH" />,
        href: "https://disk.yandex.ru/i/8FZ9659Yy9SUdA",
      },
      {
        icon: <IconPortfolioGithub className="Github" />,
        href: "https://github.com/ponchik009",
      },
    ],
  },
  {
    src: Fiona,
    alt: "Таня",
    title: (
      <>
        Это дизайнер <span>#Таня</span>
      </>
    ),
    info: "Это Таня, и она дизайнер. Она очень давно ищет работу. Возьмите ее на работу, она круто дизайнит. Будьте как Таня - ищите работу.",
    stack: [
      <IconStackPhotoshop title="Adobe Photoshop" className="Adobe" />,
      <IconStackAdobeIllustrator title="Abobe Illustrator" className="Adobe" />,
      <IconStackFigma title="Figma" />,
    ],
    contacts: [
      {
        icon: <IconContactVK className="VK" />,
        href: "https://vk.com/supressiya",
      },
      {
        icon: <IconContactTelegram className="Telegram" />,
        href: "https://t.me/supressiya",
      },
    ],
    portfolio: [
      {
        icon: <IconPortfolioHHru className="HH" />,
        href: "https://hh.ru/resume/44f1652dff0bb626b70039ed1f757061504968",
      },
      {
        icon: <IconPortfolioBehance className="Behance" />,
        href: "https://www.behance.net/supressiya",
      },
    ],
  },
  {
    src: Donkey,
    alt: "Камрон",
    title: (
      <>
        Это Java-разработчик{" "}
        <span>
          {"{"}Камрон{"}"}
        </span>
      </>
    ),
    info: "Приехав из далекого Узбекистана, Камрон разрывается между желанием писать чистые функции и охмурять девушек.",
    stack: [<IconStackJava title="Java" />, <IconStackSpring title="Spring" />],
    contacts: [
      {
        icon: <IconContactVK className="VK" />,
        href: "#",
      },
      {
        icon: <IconContactTelegram className="Telegram" />,
        href: "#",
      },
    ],
    portfolio: [
      {
        icon: <IconPortfolioHHru className="HH" />,
        href: "#",
      },
      {
        icon: <IconPortfolioGithub className="Github" />,
        href: "#",
      },
    ],
  },
  {
    src: Amogus,
    alt: "Ваше имя",
    title: (
      <>
        {" "}
        <span>
          {"<"}Место свободно{">"}
        </span>
      </>
    ),
    info: "Если вы хотите стать частью нашей команды, это место для вас! (стоимость обговаривается индивидуально)",
    stack: [
      <IconStackNeutral title="Ваш навык" />,
      <IconStackNeutral title="Ваш навык" />,
      <IconStackNeutral title="Ваш навык" />,
    ],
    contacts: [
      {
        icon: <IconContactVK className="VK" />,
        href: "#",
      },
      {
        icon: <IconContactTelegram className="Telegram" />,
        href: "#",
      },
    ],
    portfolio: [
      {
        icon: <IconPortfolioHHru className="HH" />,
        href: "#",
      },
      {
        icon: <IconPortfolioGithub className="Github" />,
        href: "#",
      },
    ],
  },
  {
    src: Amogus,
    alt: "Ваше имя",
    title: (
      <>
        {" "}
        <span>
          {"<"}Место свободно{">"}
        </span>
      </>
    ),
    info: "Если вы хотите стать частью нашей команды, это место для вас! (стоимость обговаривается индивидуально)",
    stack: [
      <IconStackNeutral title="Ваш навык" />,
      <IconStackNeutral title="Ваш навык" />,
      <IconStackNeutral title="Ваш навык" />,
    ],
    contacts: [
      {
        icon: <IconContactVK className="VK" />,
        href: "#",
      },
      {
        icon: <IconContactTelegram className="Telegram" />,
        href: "#",
      },
    ],
    portfolio: [
      {
        icon: <IconPortfolioHHru className="HH" />,
        href: "#",
      },
      {
        icon: <IconPortfolioGithub className="Github" />,
        href: "#",
      },
    ],
  },
  {
    src: Amogus,
    alt: "Ваше имя",
    title: (
      <>
        {" "}
        <span>
          {"<"}Место свободно{">"}
        </span>
      </>
    ),
    info: "Если вы хотите стать частью нашей команды, это место для вас! (стоимость обговаривается индивидуально)",
    stack: [
      <IconStackNeutral title="Ваш навык" />,
      <IconStackNeutral title="Ваш навык" />,
      <IconStackNeutral title="Ваш навык" />,
    ],
    contacts: [
      {
        icon: <IconContactVK className="VK" />,
        href: "#",
      },
      {
        icon: <IconContactTelegram className="Telegram" />,
        href: "#",
      },
    ],
    portfolio: [
      {
        icon: <IconPortfolioHHru className="HH" />,
        href: "#",
      },
      {
        icon: <IconPortfolioGithub className="Github" />,
        href: "#",
      },
    ],
  },
  {
    src: Amogus,
    alt: "Ваше имя",
    title: (
      <>
        {" "}
        <span>
          {"<"}Место свободно{">"}
        </span>
      </>
    ),
    info: "Если вы хотите стать частью нашей команды, это место для вас! (стоимость обговаривается индивидуально)",
    stack: [
      <IconStackNeutral title="Ваш навык" />,
      <IconStackNeutral title="Ваш навык" />,
      <IconStackNeutral title="Ваш навык" />,
    ],
    contacts: [
      {
        icon: <IconContactVK className="VK" />,
        href: "#",
      },
      {
        icon: <IconContactTelegram className="Telegram" />,
        href: "#",
      },
    ],
    portfolio: [
      {
        icon: <IconPortfolioHHru className="HH" />,
        href: "#",
      },
      {
        icon: <IconPortfolioGithub className="Github" />,
        href: "#",
      },
    ],
  },
];

export const TeamBlock = () => {
  const [persons, setPersons] = React.useState(data);

  const [active, setActive] = React.useState(0);

  const bgRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // паралаксик
    const callback = () => {
      const top =
        (document.documentElement.scrollTop - window.innerHeight + 200) * 0.5;

      if (top < 0) {
        return;
      }

      if (bgRef.current) {
        bgRef.current.style.top = `${top}px`;
      }
    };

    window.addEventListener("scroll", callback);

    return () => {
      window.removeEventListener("scroll", callback);
    };
  }, []);

  return (
    <div className={styles.teamBlockWrapper}>
      <div className={styles.teamBlock}>
        <div className={styles.teamBlock__innerWrapper} ref={bgRef}>
          <IconTeamBgFirst className={styles.bgFirst} />
          <IconTeamBgSecond className={styles.bgFirst} />
        </div>
        <h3>О команде</h3>
        <div className={styles.personsContainer}>
          <Persons
            active={active}
            onPersonClick={setActive}
            persons={persons}
          />
          <PersonInfo person={persons[active]} />
        </div>
      </div>
    </div>
  );
};
