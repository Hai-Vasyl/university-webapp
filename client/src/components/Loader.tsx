import React from "react";
// @ts-ignore
import styles from "../styles/loader.module";

interface ILoaderProps {
  center?: boolean;
}

const Loader: React.FC<ILoaderProps> = ({ center }) => {
  return (
    <div className={`${styles.loader} ${center && styles.loader__center}`}>
      {center && <h1 className={styles.loader__logo}>ІППТ</h1>}
      <div className={styles.loader__progress}>
        <div className={styles.loader__scale}></div>
      </div>
    </div>
  );
};

export default Loader;
