import CasinoCard from "../../../entities/casino";
import { getFormattedDate } from "../../../shared/function/getFormattedDate";
import { MockCasinos } from "../../../shared/mock/CardCasino";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const today = getFormattedDate();

  return (
    <div className={styles.homePage}>
      <div className={styles.content}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Best Crypto Casinos – Top Bitcoin Casinos with No KYC in 2026
          </h1>
          <span className={styles.textInfo}>
            Our mission is to provide you with an honest and transparent
            analysis of the crypto gambling market. We thoroughly test and
            compare both new and established Bitcoin casinos based on key
            metrics: licensing, actual withdrawal speed, fairness of gaming
            algorithms, and bonus terms. Forget about delayed bank transfers and
            complex verifications — choose the top-tier platforms for instant,
            secure, and seamless cryptocurrency gaming.
          </span>
          <span className={styles.dateInfo}>Updated: {today}</span>
        </div>
        <div className={styles.listCard}>
          <h3 className={styles.listCardTitle}>
            Top 10 Online Crypto Casinos Ranked for 2026
          </h3>
          <div className={styles.listCardContent}>
            {MockCasinos.map((el) => {
              return <CasinoCard casino={el}></CasinoCard>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
