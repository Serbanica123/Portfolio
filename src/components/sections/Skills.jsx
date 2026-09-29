import { skillGroups } from "../../data/skills";
import Section from "../ui/Section";
import { TagList } from "../ui/Tag";
import styles from "./Skills.module.css";

export default function Skills() {
    return (
        <Section id="skills" title="Skills" intro="Highlighted tags are the tools I use the most.">
            <ul className={styles.grid}>
                {skillGroups.map(({ category, icon, main, skills }) => (
                    <li key={category} className={styles.group}>
                        <div className={styles.header}>
                            <img src={icon} alt="" />
                            <h3>{category}</h3>
                        </div>
                        <TagList items={skills} strong={main} />
                    </li>
                ))}
            </ul>
        </Section>
    );
}
