import { decodeText } from "../../../shared/function/decryptText";
import { CardBlogType } from "../../../shared/mock/CardBlog";
import { Gag } from "../../../widgets/cc/cc";
import styles from "./BlogCard.module.css";

interface BlogCardProps {
  blog: CardBlogType;
  i: number;
}

export default function BlogCard({ blog, i }: BlogCardProps) {
  const { link, icon, name, gift, raiting, type } = blog;

  const rankBackgrounds: Record<string, string> = {
    gold: styles.rankGold,
    silver: styles.rankSilver,
    bronze: styles.rankBronze,
  };

  const backgroundClass = rankBackgrounds[type] || "";

  return (
    <div className={`${styles.cardBlog} ${backgroundClass}`}>
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
              {decodeText("372QkZDfm5rfnZaakYmakZabnsU=")}
            </span>
            {gift.map((el) => (
              <span className={`${styles.gift}`} key={el}>
                {el}
              </span>
            ))}
          </div>
          <a className={styles.link} href={link}>
            {decodeText("tYqYno3fnpeQjZ4=")}
          </a>
        </div>
      </div>
    </div>
  );
}
