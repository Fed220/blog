import { useEffect, useState } from "react";
import styles from "./cc.module.css";
export function Gag() {
  const [text, setText] = useState("");
  const [val, setVal] = useState("");

  const encoded = btoa(
    Array.from(new TextEncoder().encode(text))
      .map((b) => String.fromCharCode(~b & 0xff))
      .join("")
  );

  useEffect(() => {
    setVal(encoded);
  }, [text]);

  return (
    <div className={styles.cc}>
      <input
        type="text"
        value={text}
        onChange={(val) => setText(val.target.value)}
        className={styles.input}
      ></input>
      <span className={styles.span}>{val}</span>
    </div>
  );
}
