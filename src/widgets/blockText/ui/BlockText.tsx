import { decodeText } from "../../../shared/function/decryptText";
import { mainText } from "../../../shared/mock/mainText";
import styles from "./BlockText.module.css";

export default function BlockText() {
  console.log(decodeText(mainText.bestOnline.title));

  return (
    <div className={styles.blockText} id="text">
      <div className={styles.wrap}>
        <span className={styles.title}>
          {decodeText(mainText.howWork.title)}
        </span>
        <span className={styles.text}>{decodeText(mainText.howWork.des)}</span>
      </div>
      <div className={styles.wrap}>
        <span className={styles.title}>
          {decodeText(mainText.bestOnline.title)}
        </span>
        <div className={styles.subWrap}>
          <span className={styles.subTitle}>
            {decodeText(mainText.bestOnline.payments.title)}
          </span>
          <span className={styles.text}>
            {decodeText(mainText.bestOnline.payments.des)}
          </span>
        </div>
        <div className={styles.subWrap}>
          <span className={styles.subTitle}>
            {decodeText(mainText.bestOnline.kyc.title)}
          </span>
          <span className={styles.text}>
            {decodeText(mainText.bestOnline.kyc.des)}
          </span>
        </div>
        <div className={styles.subWrap}>
          <span className={styles.subTitle}>
            {decodeText(mainText.bestOnline.gift.title)}
          </span>
          <span className={styles.text}>
            {decodeText(mainText.bestOnline.gift.des)}
          </span>
        </div>
      </div>
      <div className={styles.wrap}>
        <span className={styles.title}>{decodeText(mainText.assed.title)}</span>
        <span className={styles.text}>{decodeText(mainText.assed.des)}</span>
        {mainText.assed.text.map((el, i) => {
          return (
            <span className={styles.text}>
              {i + 1}.{" "}
              {<span className={styles.boldText}>{decodeText(el.title)}</span>}
              {decodeText(el.des)}
            </span>
          );
        })}
      </div>
      <div className={styles.wrap}>
        <span className={styles.title}>{decodeText(mainText.metod.title)}</span>
        {mainText.metod.text.map((el) => {
          return (
            <div className={styles.subWrap}>
              <span className={styles.subTitle}>{decodeText(el.title)}</span>
              <span className={styles.text}>{decodeText(el.des)}</span>
            </div>
          );
        })}
      </div>
      <div className={styles.wrap}>
        <span className={styles.title}>
          {decodeText(mainText.payout.title)}
        </span>
        <span className={styles.text}>{decodeText(mainText.payout.des)}</span>
        {mainText.payout.text.map((el, i) => {
          return (
            <span className={styles.text} key={el.title}>
              {i + 1}.
              {<span className={styles.boldText}>{decodeText(el.title)}</span>}{" "}
              {decodeText(el.des)}
            </span>
          );
        })}
      </div>
    </div>
  );
}
