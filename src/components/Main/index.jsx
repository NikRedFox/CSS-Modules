import { useMemo } from "react";
// import natureza from "./Natureza_main.module.css";
import minimalista from "./Minimalista_main.module.css";
// import retro from "./Retro_main.module.css"

const styleOptions = [minimalista];

export default function Main() {
  const styles = useMemo(() =>{
    return styleOptions[Math.floor(Math.random() * styleOptions.length)];
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.tint}></div>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>CSS Modules</h1>
        <h2 className={styles.subTitle}>O que é? O que faz? Como usa? </h2>
      </div>
      
      <div className={`${styles.hexagono} ${styles.hex1}`}></div>
      <div className={`${styles.hexagono} ${styles.hex2}`}></div>
      <div className={`${styles.hexagono} ${styles.hex3}`}></div>
      <div className={`${styles.hexagono} ${styles.hex4}`}></div>
      <div className={`${styles.hexagono} ${styles.hex5}`}></div>
      
    </main>
  );
}