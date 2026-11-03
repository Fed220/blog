import { CardCasinoType } from "../../../shared/mock/CardCasino";
import styles from "./CasinoCard.module.css";

interface CasinoCardProps {
  casino: CardCasinoType;
}

export default function CasinoCard({ casino }: CasinoCardProps) {
  const { link, icon, name, bonus, raiting } = casino;

  return (
    <div className={styles.cardCasion}>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.imgWrap}>
            <img src={icon} className={styles.img}></img>
          </div>
          <div className={styles.infoText}>
            <span className={styles.raiting}>{raiting}</span>
            <h4 className={styles.name}>{name}</h4>
            <span className={styles.bonus}>{bonus}</span>
          </div>
        </div>
        <a className={styles.link} href={link}>
          Play Now
        </a>
      </div>
    </div>
  );
}
