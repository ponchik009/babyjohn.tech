import React from "react";

import styles from "./MainBlock.module.scss";

// Буквы команды
import { ReactComponent as IconArrowTeam } from "assets/icons/IconArrowTeam.svg";
import { ReactComponent as IconOchar } from "assets/icons/IconOchar.svg";
import { ReactComponent as IconUchar } from "assets/icons/IconUchar.svg";
import { ReactComponent as IconRchar } from "assets/icons/IconRchar.svg";
import { ReactComponent as IconTchar } from "assets/icons/IconTchar.svg";
import { ReactComponent as IconEchar } from "assets/icons/IconEchar.svg";
import { ReactComponent as IconAchar } from "assets/icons/IconAchar.svg";
import { ReactComponent as IconMchar } from "assets/icons/IconMchar.svg";

// Emoji
import { ReactComponent as IconEmojiThinkingFace } from "assets/icons/IconEmojiThinkingFace.svg";
import { ReactComponent as IconEmojiLightBulb } from "assets/icons/IconEmojiLightBulb.svg";
import { ReactComponent as IconEmojiMoneyMouthFace } from "assets/icons/IconEmojiMoneyMouthFace.svg";
import { ReactComponent as IconEmojiHeartEyes } from "assets/icons/IconEmojiHeartEyes.svg";
import { ReactComponent as IconEmojiDroolingFace } from "assets/icons/IconEmojiDroolingFace.svg";
import { ReactComponent as IconEmojiSweatDroplets } from "assets/icons/IconEmojiSweatDroplets.svg";
import { ReactComponent as IconEmojiWoozyFace } from "assets/icons/IconEmojiWoozyFace.svg";
import { ReactComponent as IconEmojiPinchedFingers } from "assets/icons/IconEmojiPinchedFingers.svg";
import { ReactComponent as IconEmojiFaceWithOpenMouth } from "assets/icons/IconEmojiFaceWithOpenMouth.svg";

export const MainBlock = () => {
  const [showBlock, setShowBlock] = React.useState(true);

  React.useEffect(() => {
    const onScroll = () =>
      setShowBlock(document.documentElement.scrollTop < window.innerHeight);

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!showBlock) {
    return null;
  }

  return (
    <div className={styles.mainBlock}>
      <div className={styles.titleWraper}>
        <h1>
          <div>Инновации начинаются</div>
          <div>
            <span>с</span>
            <div className={styles.animation}>
              <div className={styles.first}>
                <div>
                  <IconEmojiLightBulb />
                  <IconEmojiThinkingFace />
                  <IconEmojiMoneyMouthFace />
                </div>
              </div>
              <div className={styles.second}>
                <div>
                  <IconEmojiHeartEyes />
                  <IconEmojiDroolingFace />
                  <IconEmojiSweatDroplets />
                </div>
              </div>
              <div className={styles.third}>
                <div>
                  <IconEmojiWoozyFace />
                  <IconEmojiPinchedFingers />
                  <IconEmojiFaceWithOpenMouth />
                </div>
              </div>
            </div>
            <div className={styles.animation}>
              <div className={styles.first}>
                <div>кода</div>
              </div>
              <div className={styles.second}>
                <div>дизайна</div>
              </div>
              <div className={styles.third}>
                <div>идеи</div>
              </div>
            </div>
          </div>
        </h1>
      </div>

      <h3>
        <span>design </span>
        <span>development </span>
        <span>drunk</span>
      </h3>

      <div className={styles.alert}>
        <IconArrowTeam />
        <div className={styles.alertRow}>
          <IconOchar />
          <IconUchar />
          <IconRchar />
        </div>
        <div className={styles.alertRow}>
          <IconTchar />
          <IconEchar />
          <IconAchar />
          <IconMchar />
        </div>
      </div>

      <svg id="filters">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
									0 1 0 0 0
									0 0 1 0 0
									0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
