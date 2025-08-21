import { useState } from "react";
import styles from "./HiveMenu.module.css";

export default function HiveMenu() {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.menu}>
      <div
        className={`${styles.hex} ${styles.center}`}
        onClick={() => setActive(!active)}
      >
        <span>Explorar</span>
      </div>

      <div className={`${styles.hex} ${styles.item} ${active ? styles.pos1 : ""}`}></div>
      <div className={`${styles.hex} ${styles.item} ${active ? styles.pos2 : ""}`}></div>
      <div className={`${styles.hex} ${styles.item} ${active ? styles.pos3 : ""}`}></div>
      <div className={`${styles.hex} ${styles.item} ${active ? styles.pos4 : ""}`}></div>
      <div className={`${styles.hex} ${styles.item} ${active ? styles.pos5 : ""}`}></div>
      <div className={`${styles.hex} ${styles.item} ${active ? styles.pos6 : ""}`}></div>
    </div>
  );
}
