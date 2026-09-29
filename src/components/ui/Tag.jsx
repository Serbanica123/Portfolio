import styles from "./Tag.module.css";

// A small rounded label. `variant` can be "default", "strong" (teal) or "outline".
export default function Tag({ children, variant = "default" }) {
    return <span className={`${styles.tag} ${styles[variant]}`}>{children}</span>;
}

export function TagList({ items, strong = [] }) {
    return (
        <ul className={styles.list}>
            {items.map((item) => (
                <li key={item}>
                    <Tag variant={strong.includes(item) ? "strong" : "default"}>{item}</Tag>
                </li>
            ))}
        </ul>
    );
}
