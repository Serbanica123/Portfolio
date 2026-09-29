import { profile } from "../../data/profile";
import Button from "../ui/Button";
import SocialLinks from "../ui/SocialLinks";
import styles from "./Hero.module.css";

// The first thing people see: photo, name, one line and the main buttons.
export default function Hero() {
    return (
        <section className={styles.hero}>
            <img className={styles.photo} src={profile.photo} alt={profile.name} />
            <div className={styles.text}>
                <p className={styles.hello}>Hi, I'm</p>
                <h1 className={styles.name}>{profile.name}</h1>
                <p className={styles.tagline}>{profile.tagline}</p>
                <div className={styles.buttons}>
                    <Button to="/#work">See my work</Button>
                    <Button href={profile.resume} target="_blank" rel="noopener noreferrer" variant="secondary">
                        Download CV
                    </Button>
                </div>
                <SocialLinks />
            </div>
        </section>
    );
}
