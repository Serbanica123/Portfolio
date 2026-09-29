import { highlights } from "../../data/highlights";
import styles from "./Highlights.module.css";

export default function Highlights() {
    return (
        <ul className={styles.grid}>
            {highlights.map(({ big, small }) => (
                <li key={big} className={styles.box}>
                    <p className={styles.big}>{big}</p>
                    <p className={styles.small}>{small}</p>
                </li>
            ))}
        </ul>
    );
}
