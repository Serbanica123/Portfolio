import { profile } from "../../data/profile";
import Section from "../ui/Section";
import RichText from "../ui/RichText";
import { TagList } from "../ui/Tag";
import styles from "./About.module.css";

export default function About() {
    return (
        <Section id="about" title="About me">
            <div className={styles.layout}>
                <div className={styles.text}>
                    {profile.about.map((paragraph) => (
                        <p key={paragraph.slice(0, 40)}>
                            <RichText text={paragraph} />
                        </p>
                    ))}
                </div>

                <aside className={styles.openToWork}>
                    <h3>Open to work</h3>
                    <TagList items={profile.openToWork} />
                </aside>
            </div>
        </Section>
    );
}
