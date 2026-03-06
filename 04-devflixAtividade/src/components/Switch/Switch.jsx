import React from "react";
import styles from "./Switch.module.css";

const Switch = ({ troca, isLight }) => {
  return (
    <div className={`${styles.wrapper} ${isLight ? styles.light : ""}`}>
      <div onClick={troca} className={styles.switch}>
        <button type="button" aria-label="Alternar tema"></button>
        <span></span>
      </div>
    </div>
  );
};

export default Switch;
