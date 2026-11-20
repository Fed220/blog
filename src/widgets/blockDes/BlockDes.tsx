import { MockBlogs } from "../../shared/mock/CardBlog";
import styles from "./BlockDes.module.css";

export default function BlockDes() {
  return (
    <div className={styles.blockDesWrap}>
      {MockBlogs.map((blog, i) => {
        return (
          <div className={styles.blogDes}>
            <div className={styles.titleWrap}>
              <span className={styles.title}>
                {i + 1}. {blog.name}
              </span>
              <span className={styles.gift}>{blog.gift}</span>
            </div>
            <span className={styles.des}>{blog.des}</span>
          </div>
        );
      })}
    </div>
  );
}
