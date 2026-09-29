import { Link } from "react-router-dom";
import { education, experience } from "../../data/experience";
import { profile } from "../../data/profile";
import Section from "../ui/Section";
import Button from "../ui/Button";
import styles from "./Experience.module.css";

function Timeline({ items }) {
    return (
        <ol className={styles.timeline}>
            {items.map((item) => (
                <li key={`${item.role}-${item.place}`} className={styles.item}>
                    <span className={styles.dates}>{item.dates}</span>
                    <div className={styles.what}>
                        <p className={styles.role}>{item.role}</p>
                        <p className={styles.place}>
                            {item.place}
                            {item.note && <> · {item.note}</>}
                        </p>
                    </div>
                    {item.project && (
                        <Link to={`/projects/${item.project}`} className={styles.link}>
                            See project →
                        </Link>
                    )}
                </li>
            ))}
        </ol>
    );
}

export default function Experience() {
    return (
        <Section id="experience" title="Experience">
            <Timeline items={experience} />
            <h3 className={styles.subtitle}>Education</h3>
            <Timeline items={education} />
            <div className={styles.cv}>
                <Button href={profile.resume} target="_blank" rel="noopener noreferrer" variant="secondary">
                    Download full CV
                </Button>
            </div>
        </Section>
    );
}
