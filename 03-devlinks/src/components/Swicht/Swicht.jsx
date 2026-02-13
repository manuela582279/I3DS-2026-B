import styles from "./Swicht.module.css";
import React from "react";

const Swicht = ({ isLight, troca }) => {
  return (
    <div className={isLight ? styles.light : ""}>
      <div id={styles.Swicht}>
        <button></button>
        <spam></spam>
      </div>
    </div>
  );
};

export default Swicht;
