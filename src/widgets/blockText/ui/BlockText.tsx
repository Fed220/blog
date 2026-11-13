import { mainText } from "../../../shared/mock/mainText";
import styles from "./BlockText.module.css";

export default function BlockText() {
  return (
    <div className={styles.blockText}>
      <div className={styles.wrap}>
        <h3 className={styles.title}>{mainText.howWork.title}</h3>
        <span className={styles.text}>{mainText.howWork.des}</span>
      </div>
      <div className={styles.wrap}>
        <h3 className={styles.title}>{mainText.bestOnline.title}</h3>
        <div className={styles.subWrap}>
          <span className={styles.subTitle}>
            {mainText.bestOnline.payments.title}
          </span>
          <span className={styles.text}>
            {mainText.bestOnline.payments.des}
          </span>
        </div>
        <div className={styles.subWrap}>
          <span className={styles.subTitle}>
            {mainText.bestOnline.kyc.title}
          </span>
          <span className={styles.text}> {mainText.bestOnline.kyc.des}</span>
        </div>
        <div className={styles.subWrap}>
          <span className={styles.subTitle}>
            {mainText.bestOnline.bonus.title}
          </span>
          <span className={styles.text}> {mainText.bestOnline.bonus.des}</span>
        </div>
      </div>
      <div className={styles.wrap}>
        <h3 className={styles.title}>{mainText.assed.title}</h3>
        <span className={styles.text}>{mainText.assed.des}</span>
        {mainText.assed.text.map((el, i) => {
          return (
            <span className={styles.text}>
              {i + 1}. {<span className={styles.boldText}>{el.title}</span>}{" "}
              {el.des}
            </span>
          );
        })}
      </div>
      <div className={styles.wrap}>
        <h3 className={styles.title}>{mainText.metod.title}</h3>
        {mainText.metod.text.map((el) => {
          return (
            <div className={styles.subWrap}>
              <span className={styles.subTitle}>{el.title}</span>
              <span className={styles.text}>{el.des}</span>
            </div>
          );
        })}
      </div>
      <div className={styles.wrap}>
        <h3 className={styles.title}>{mainText.payout.title}</h3>
        <span className={styles.text}>{mainText.payout.des}</span>
        <span className={styles.text}>{mainText.payout.des1}</span>
        {mainText.payout.text.map((el, i) => {
          return (
            <span className={styles.text} key={el.title}>
              {i + 1}. {<span className={styles.boldText}>{el.title}</span>}{" "}
              {el.des}
            </span>
          );
        })}
      </div>
    </div>
  );
}
