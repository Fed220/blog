import { MockBlogs } from "../../shared/mock/CardBlog";
import styles from "./BlockDes.module.css";

export default function BlockDes() {
  return (
    <div className={styles.blockDesWrap}>
      {MockBlogs.map((blog, i) => (
        <div className={styles.blogDes} key={blog.name}>
          <div className={styles.titleWrap}>
            <span className={styles.title}>
              {i + 1}. {blog.name}
            </span>

            <div className={styles.giftWrap}>
              {blog.gift.map((el) => (
                <span className={styles.gift} key={el}>
                  {el}
                </span>
              ))}
            </div>
          </div>

          <span className={styles.des}>{blog.des}</span>
        </div>
      ))}
    </div>
  );
}
