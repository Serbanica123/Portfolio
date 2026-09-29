import { useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../../data/profile";
import styles from "./Navbar.module.css";

// The menu links. `id` is the id of the section on the home page.
const links = [
    { id: "work", label: "Work" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const close = () => setMenuOpen(false);

    return (
        <header className={styles.navbar}>
            <nav className={styles.container}>
                <Link to="/" className={styles.name} onClick={close}>
                    {profile.name}
                </Link>

                <button
                    type="button"
                    className={styles.toggle}
                    aria-label="Menu"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>

                <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
                    {links.map(({ id, label }) => (
                        <li key={id}>
                            <Link to={`/#${id}`} onClick={close}>{label}</Link>
                        </li>
                    ))}
                    <li>
                        <a href={profile.resume} target="_blank" rel="noopener noreferrer" className={styles.resume} onClick={close}>
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
