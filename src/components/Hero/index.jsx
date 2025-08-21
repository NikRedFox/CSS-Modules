import { useMemo } from "react";
import minimalista from "./Minimalista_hero.module.css";
import HiveMenu from "../HiveMenu/HiveMenu";

const styleOptions = [minimalista];

export default function Hero() {
  const styles = useMemo(() =>{
    return styleOptions[Math.floor(Math.random() * styleOptions.length)];
  }, [])

    return(
        <>            
            <div className={styles.container}> 
                <div className={styles.paragraphContainer}>
                  <p className={styles.paragraph}>CSS Modules é um sistema que gera nomes únicos para classes, evitando conflitos de estilos.</p>
                </div>   
                <HiveMenu/>
                <div className={styles.paragraphContainer}>
                <p className={styles.paragraph}>CSS Modules é um sistema que gera nomes únicos para classes, evitando conflitos de estilos.</p>
                </div>       
                    
            </div>
            
        </>
        
    )
}