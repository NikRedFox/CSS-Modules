import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./HiveMenu.module.css";

export default function HiveMenu() {
  const [active, setActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const positions = [
    { x: 0, y: -260, label: "Item 1" },
    { x: 225, y: -130, label: "Item 2" },
    { x: 225, y: 130, label: "Item 3" },
    { x: 0, y: 260, label: "Item 4" },
    { x: -225, y: 130, label: "Item 5" },
    { x: -225, y: -130, label: "Item 6" },
  ];

  return (
    <div className={styles.menu}>
      <div
        className={`${styles.center}`}
        onClick={() => setActive(!active)}
      >
        <span className={styles.span}>Explorar</span>
      </div>

      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className={`${styles.hex} ${styles.item}`}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={
            active
              ? { x: pos.x, y: pos.y, opacity: 1 }
              : { x: 0, y: 0, opacity: 0 }
          }
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={()=> setSelectedItem(pos)}
        >
          <span>{pos.label}</span>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className={styles.modalBackdrop}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}>

              <motion.div
                className={styles.modalContent}
                initial={{scale: 0.8, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                exit={{opacity: 0}}
              >
                <h2>{selectedItem.label}</h2>
                <p>{selectedItem.content}</p>
                <button onClick={()=> setSelectedItem(null)}>Fechar</button>
              </motion.div>
          </motion.div>)}
      </AnimatePresence>
    </div>
  );
}
