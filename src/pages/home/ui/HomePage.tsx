import BlogCard from "../../../entities/blog";
import { getFormattedDate } from "../../../shared/function/getFormattedDate";
import { MockBlogs } from "../../../shared/mock/CardBlog";
import BlockText from "../../../widgets/blockText/ui/BlockText";
import styles from "./HomePage.module.css";
import girl from "../../../shared/logo/gitrl.svg";
import men from "../../../shared/logo/men.svg";
import { decodeText } from "../../../shared/function/decryptText";
import BlockDes from "../../../widgets/blockDes/BlockDes";

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
            <img src={men} className={styles.img}></img>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.info}>
            <h1 className={styles.title}>
              {decodeText(
                "37OQjN+SmpWQjZqM35yNlo+LkJyejJaRkIzF35OQjN+PjZaRnJaPnpOajN+cnoyWkZCM35ua372Wi5yQlpHfjJaR39/f39/f39/f39/f39/fiZqNlpmWnJ6cljxMkd+bmt+Wm5qRi5abnpvf17SmvNbfmpHfzc/NyQ=="
              )}
            </h1>
            <span className={styles.textInfo}>
              {decodeText(
                "37GKmoyLjZ7fkpaMljxMkd+ajN+QmY2anJqNi5rfipHfnpE8XpOWjJaM35eQkZqMi5Dfht+LjZ6RjI+ejZqRi5rfm5qT39/f39/f39/f39/f39/fkpqNnJ6bkN+bmt+TkIzflYqamJCM35ua356Fno3fnJCR35yNlo+LkJKQkZqbnozR37qJnpOKnpKQjN+G39/f39/f39/f39/f39/fnJCSj56NnpKQjN+SlpGKnJaQjJ6SmpGLmt+LnpGLkN+TkIzfnJ6MlpGQjN+bmt+9louckJaR35GKmomQjN+ckJKQ39/f39/f39/f39/f39/fk5CM34ae35yQkYyQk5abnpuQjNPfnZ6MPF6Rm5CRkIzfmpHflpGblpyem5CNmozfnJOeiZrF35OWnJqRnJaejNPf39/f39/f39/f39/f39+JmpOQnJabnpvfjZqek9+bmt+NmouWjZDT35qOipabnpvfm5rfk5CM356TmJCNlouSkIzfm5rflYqamJDfht/f39/f39/f39/f39/f35yQkZuWnJaQkZqM35ua35OQjN+dkJGQjNHfsJOJPFKbnoua35ua35OejN+LjZ6RjJmajZqRnJaejN+dnpGcno2Wnozf39/f39/f39/f39/f39+TmpGLnozfht+TkIzfj42QnJqMkIzfm5rfiZqNlpmWnJ6cljxMkd+ckJKPk5qVkIzE35qTlpia34+TnouemZCNkp6M39/f39/f39/f39/f39/fm5rfj42WkpqN35GWiZqT34+ejZ7fm5aMmY2Ki56N35ua34qRnt+ah4+ajZaakZyWnt+bmt+VipqYkN+ckJHf39/f39/f39/f39/f39+cjZaPi5CSkJGam56M346Kmt+Mmp7flpGMi56RizxekZqe09+MmpiKjZ7fht+Zk4qWm57R"
              )}
            </span>
            <span className={styles.dateInfo}>Actualizada: {today}</span>
          </div>
        </div>
      </div>
      <div className={styles.backMain} id="blogs">
        <div className={styles.container}>
          <div className={styles.listCard}>
            <h3 className={styles.listCardTitle}>
              {decodeText(
                "s5CM387P35KalZCNmozfnI2Wj4uQnJ6MlpGQjN+akd+TPFKRmp7fnJOejJaZlpyem5CM34+ejZ7fzc/NyQ=="
              )}
            </h3>
            <div className={styles.listCardContent}>
              {MockBlogs.map((el, i) => {
                return <BlogCard i={i + 1} blog={el}></BlogCard>;
              })}
            </div>
          </div>
          <BlockDes></BlockDes>
          <BlockText></BlockText>
        </div>
      </div>
    </div>
  );
}
