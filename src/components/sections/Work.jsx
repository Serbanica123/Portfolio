import { useState } from "react";
import { projects } from "../../data/projects";
import Section from "../ui/Section";
import ProjectCard from "../ui/ProjectCard";
import styles from "./Work.module.css";

const filters = [
    { key: "all", label: "All" },
    { key: "internship", label: "Internships" },
    { key: "personal", label: "Personal projects" },
    { key: "competition", label: "Competitions" },
];

// All projects, internships and competition teams as one grid of cards.
export default function Work() {
    const [filter, setFilter] = useState("all");
    const shown = filter === "all" ? projects : projects.filter((project) => project.type === filter);

    return (
        <Section id="work" title="Work" intro="Internships, personal projects and competition robots. Click a card to see the full project.">
            <div className={styles.filters} role="group" aria-label="Filter projects">
                {filters.map(({ key, label }) => {
                    const count = key === "all" ? projects.length : projects.filter((project) => project.type === key).length;
                    return (
                        <button
                            key={key}
                            type="button"
                            aria-pressed={filter === key}
                            className={`${styles.filter} ${filter === key ? styles.active : ""}`}
                            onClick={() => setFilter(key)}
                        >
                            {label} <span>{count}</span>
                        </button>
                    );
                })}
            </div>

            <ul className={styles.grid}>
                {shown.map((project) => (
                    <li key={project.slug}>
                        <ProjectCard project={project} />
                    </li>
                ))}
            </ul>
        </Section>
    );
}
