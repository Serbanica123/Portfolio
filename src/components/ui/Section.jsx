import styles from "./Section.module.css";

// A section of the home page with its title. `id` is used by the menu links (#work, #about, ...).
export default function Section({ id, title, intro, children }) {
    return (
        <section id={id} className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
            {intro && <p className={styles.intro}>{intro}</p>}
            {children}
        </section>
    );
}
