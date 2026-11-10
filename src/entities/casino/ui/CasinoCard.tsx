import { CardCasinoType } from "../../../shared/mock/CardCasino";
import styles from "./CasinoCard.module.css";

interface CasinoCardProps {
  casino: CardCasinoType;
  i: number;
}

export default function CasinoCard({ casino, i }: CasinoCardProps) {
  const { link, icon, name, bonus, raiting, type } = casino;

  const rankBackgrounds: Record<string, string> = {
    gold: styles.rankGold,
    silver: styles.rankSilver,
    bronze: styles.rankBronze,
  };

  const backgroundClass = rankBackgrounds[type] || "";

  return (
    <div className={`${styles.cardCasion} ${backgroundClass}`}>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={`${styles.rang} ${backgroundClass}`}>#{i}</div>
          <div className={styles.imgCover}>
            <img src={icon} className={styles.img}></img>
          </div>
          <div className={styles.infoText}>
            <div className={styles.titleWrap}>
              <h4 className={`${styles.name} ${backgroundClass}`}>{name}</h4>
              <div className={styles.raitingWrap}>
                <span className={`${styles.raiting} ${backgroundClass}`}>
                  {raiting}
                </span>
              </div>
            </div>
            <span className={`${styles.welcom} ${backgroundClass}`}>
              Welcome bonus:
            </span>
            {bonus.map((el) => (
              <span className={`${styles.bonus}`} key={el}>
                {el}
              </span>
            ))}
          </div>
          <a className={styles.link} href={link}>
            Play Now
          </a>
        </div>
      </div>
    </div>
  );
}
