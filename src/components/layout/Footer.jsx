import { profile } from "../../data/profile";
import SocialLinks from "../ui/SocialLinks";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>© {new Date().getFullYear()} {profile.name}</p>
                <SocialLinks size="small" />
            </div>
        </footer>
    );
}
