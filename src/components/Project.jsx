import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import styles from "./Project.module.css";

const projectImages = {
    "Sample Project": Object.values(import.meta.glob('../assets/Sample Project/*.{png,jpg,jpeg,svg}', { eager: true })).map(mod => mod.default || mod),
    "Digital Twin": Object.values(import.meta.glob('../assets/Digital Twin/*.{png,jpg,jpeg,svg}', { eager: true })).map(mod => mod.default || mod),
};

export function getImages(projectName) {
    return projectImages[projectName] || [];
}

function incrementImage(currentPos, imageNumber) {
    return (currentPos + 1 > imageNumber - 1) ? 0 : currentPos + 1;
}

function decrementImage(currentPos, imageNumber) {
    return (currentPos - 1 < 0) ? imageNumber - 1 : currentPos - 1;
}

const mockProject = {
    title: "Sample Project",
    description: "This is a sample project to test the card design. ...",
    images: getImages("Sample Project"),
    link: "#",
    skills: ["React", "UI", "Test", "Test1", "Test2", "Test3", "Test4", "Test5", "Test6"]
};

function ImgCarousel({ images }) {
    const [currentPos, setCurrentPos] = useState(0);
    const imageNumber = images.length;

    return (
        <div className={styles.carouselContainer}>
            <img
                src={images[currentPos]}
                alt={`Project ${currentPos}`}
                className={styles.carouselImage}
            />
            <button
                className={`${styles.carouselButton} ${styles.carouselButtonLeft}`}
                onClick={() => setCurrentPos(decrementImage(currentPos, imageNumber))}
            >
                ❮
            </button>
            <button
                className={`${styles.carouselButton} ${styles.carouselButtonRight}`}
                onClick={() => setCurrentPos(incrementImage(currentPos, imageNumber))}
            >
                ❯
            </button>
        </div>
    );
}

export default function Project({ project = mockProject }) {
    return (
        <div className={styles.projectContainer}>
            <div className={styles.projectCard}>
                <h1 className={styles.projectTitle}>{project.title}</h1>
                <div className={styles.projectContent}>
                    <div style={{ flex: 1 }}>
                        <p className={styles.projectDescription}>
                            {project.description}
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                                    <br />
                                    Github Page
                                </a>
                            )}
                        </p>
                    </div>
                    <div style={{display:'flex', alignItems: 'center', height: '100%'}}>
                        <ImgCarousel images={project.images} />

                    </div>
                </div>
                <div>
                    <p style={{ marginBottom: '5px' }}><strong>Skills and Technologies</strong></p>
                    <ul className={styles.skillsList}>
                        {project.skills.map((skill, id) => (
                            <li key={id} className={styles.skillItem}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div style={{ flex: '50vw' }}></div>
        </div>
    );
}
