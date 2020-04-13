import React from "react";

import styles from "./Preloader.module.css";

export default function Preloader() {
  return (
    <div className={styles.preloader}>
      <div className={styles.circular}>
        <span
          className="fa fa-spinner fa-spin fa-3x"
          style={{ color: "darkmagenta" }}
        ></span>
      </div>
    </div>
  );
}
