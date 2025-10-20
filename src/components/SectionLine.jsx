import React from "react";
import styles from "../components/SectionLine.module.css";

export default function SectionLine({ Title }) {
  return (
    <div className={styles.sectionDiv}>
      <h1 className={styles.sectionTitle}>{Title}</h1>
      <hr className={styles.sectionLine} />
    </div>
  );
}
