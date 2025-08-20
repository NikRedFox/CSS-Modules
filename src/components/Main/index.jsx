import { useMemo } from "react";
import natureza from "./Natureza_main.module.css";
// import minimalista from "./Minimalista_main.module.css";
// import retro from "./Retro_main.module.css"

const styleOptions = [natureza];

export default function Main() {
  const styles = useMemo(() =>{
    return styleOptions[Math.floor(Math.random() * styleOptions.length)];
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.tint}></div>
      <h1 className={styles.title}>CSS Modules</h1>
      <h2 className={styles.subTitle}>O que é? O que faz? Como usa? </h2>
      <div className={styles.container}> 
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>CSS Modules é um sistema que gera nomes únicos para classes, evitando conflitos de estilos.</p>
        </div>       
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>CSS Modules é um sistema que gera nomes únicos para classes, evitando conflitos de estilos.</p>
        </div>       
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>CSS Modules é um sistema que gera nomes únicos para classes, evitando conflitos de estilos.</p>
        </div>       
      </div>
      <div className={styles.hexagono}></div>
      
    </main>
  );
}