import CasinoCard from "../../../entities/casino";
import { getFormattedDate } from "../../../shared/function/getFormattedDate";
import { MockCasinos } from "../../../shared/mock/CardCasino";
import BlockText from "../../../widgets/blockText/ui/BlockText";
import styles from "./HomePage.module.css";
import girl from "../../../shared/logo/girl_mirrored.svg";
import zeus from "../../../shared/logo/zeus.svg";

export default function HomePage() {
  const today = getFormattedDate();

  return (
    <div className={styles.homePage}>
      <div className={styles.backInfo}>
        <div className={styles.imgWrap}>
          <div className={styles.girlCover}>
            <img src={girl} className={styles.img}></img>
          </div>
          <div className={styles.zeusCover}>
            <img src={zeus} className={styles.img}></img>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.info}>
            <h1 className={styles.title}>
              Best Crypto Casinos – Top Bitcoin Casinos with No KYC in 2026
            </h1>
            <span className={styles.textInfo}>
              Our mission is to provide you with an honest and transparent
              analysis of the crypto gambling market. We thoroughly test and
              compare both new and established Bitcoin casinos based on key
              metrics: licensing, actual withdrawal speed, fairness of gaming
              algorithms, and bonus terms. Forget about delayed bank transfers
              and complex verifications — choose the top-tier platforms for
              instant, secure, and seamless cryptocurrency gaming.
            </span>
            <span className={styles.dateInfo}>Updated: {today}</span>
          </div>
        </div>
      </div>
      <div className={styles.backMain}>
        <div className={styles.container}>
          <div className={styles.listCard}>
            <h3 className={styles.listCardTitle}>
              Top 10 Online Crypto Casinos Ranked for 2026
            </h3>
            <div className={styles.listCardContent}>
              {MockCasinos.map((el, i) => {
                return <CasinoCard i={i + 1} casino={el}></CasinoCard>;
              })}
            </div>
          </div>
          <BlockText></BlockText>
        </div>
      </div>
    </div>
  );
}
