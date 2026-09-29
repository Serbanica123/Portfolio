import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { projects, projectTypes } from "../data/projects";
import { profile } from "../data/profile";
import { getImages, getVideo } from "../utils/media";
import RichText from "../components/ui/RichText";
import Tag, { TagList } from "../components/ui/Tag";
import Gallery from "../components/ui/Gallery";
import Button from "../components/ui/Button";
import styles from "./ProjectPage.module.css";

function BulletList({ title, items }) {
    if (!items || items.length === 0) return null;
    return (
        <section className={styles.block}>
            <h2>{title}</h2>
            <ul className={styles.bullets}>
                {items.map((item) => (
                    <li key={item}>
                        <RichText text={item} />
                    </li>
                ))}
            </ul>
        </section>
    );
}

// The page for one project: /projects/<slug>
export default function ProjectPage() {
    const { slug } = useParams();
    const index = projects.findIndex((project) => project.slug === slug);
    const project = projects[index];

    useEffect(() => {
        document.title = project ? `${project.title} — ${profile.name}` : `Project not found — ${profile.name}`;
    }, [project]);

    if (!project) {
        return (
            <div className={styles.notFound}>
                <h1>Project not found</h1>
                <Link to="/#work">← Back to all work</Link>
            </div>
        );
    }

    const video = getVideo(project.mediaFolder);
    const images = getImages(project.mediaFolder);
    const previous = projects[(index - 1 + projects.length) % projects.length];
    const next = projects[(index + 1) % projects.length];

    return (
        <article className={styles.page}>
            <Link to="/#work" className={styles.back}>← Back to all work</Link>

            <header className={styles.header}>
                <div className={styles.labels}>
                    <Tag variant="strong">{projectTypes[project.type]}</Tag>
                    {project.status && <Tag variant="outline">{project.status}</Tag>}
                </div>
                <h1>{project.title}</h1>
                {project.company && (
                    <p className={styles.meta}>
                        {project.role} at <strong>{project.company}</strong> · {project.dates}
                    </p>
                )}
            </header>

            {video && <video className={styles.video} src={video} autoPlay muted loop playsInline controls />}

            <p className={styles.summary}>
                <RichText text={project.summary} />
            </p>

            <BulletList title={project.whatIDidTitle} items={project.whatIDid} />

            {project.result && (
                <section className={styles.block}>
                    <h2>Result</h2>
                    <p className={styles.result}>
                        <RichText text={project.result} />
                    </p>
                </section>
            )}

            <BulletList title="Other projects" items={project.otherWork} />
            <BulletList title="Next steps" items={project.nextSteps} />

            {images.length > 0 && (
                <section className={styles.block}>
                    <h2>Photos</h2>
                    <Gallery images={images} />
                </section>
            )}

            <section className={styles.block}>
                <h2>Tools & skills</h2>
                <TagList items={project.skills} strong={project.mainSkills} />
            </section>

            {project.github && (
                <section className={styles.block}>
                    <Button href={project.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub /> See the code on GitHub
                    </Button>
                </section>
            )}

            <nav className={styles.pager} aria-label="More projects">
                <Link to={`/projects/${previous.slug}`}>
                    <span>← Previous</span>
                    {previous.title}
                </Link>
                <Link to={`/projects/${next.slug}`} className={styles.nextLink}>
                    <span>Next →</span>
                    {next.title}
                </Link>
            </nav>
        </article>
    );
}
