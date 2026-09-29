import { useState } from "react";
import { Link } from "react-router-dom";
import { projectTypes } from "../../data/projects";
import { getCover, getVideo } from "../../utils/media";
import { plainText } from "../../utils/text";
import Tag, { TagList } from "./Tag";
import styles from "./ProjectCard.module.css";

// One small card in the Work grid. Clicking it opens the project page.
// When the mouse is over the card, the project video plays instead of the cover photo.
export default function ProjectCard({ project }) {
    const [hovered, setHovered] = useState(false);
    const cover = getCover(project.mediaFolder, project.cover);
    const video = getVideo(project.mediaFolder);

    return (
        <Link
            to={`/projects/${project.slug}`}
            className={styles.card}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className={styles.media}>
                {cover && <img src={cover.src} alt={cover.caption} loading="lazy" />}
                {video && hovered && <video src={video} autoPlay muted loop playsInline />}
                <div className={styles.labels}>
                    <Tag variant="strong">{projectTypes[project.type]}</Tag>
                    {project.status && <Tag>{project.status}</Tag>}
                </div>
            </div>

            <div className={styles.body}>
                <h3 className={styles.title}>{project.title}</h3>
                {project.company && (
                    <p className={styles.meta}>
                        {project.company} · {project.dates}
                    </p>
                )}
                <p className={styles.summary}>{plainText(project.summary)}</p>
                <TagList items={project.mainSkills} />
            </div>
        </Link>
    );
}
