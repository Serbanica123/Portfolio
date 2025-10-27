import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import styles from "./Project.module.css";

const projectImages = {
    "Sample Project": Object.values(import.meta.glob('../assets/Sample Project/*.{png,jpg,jpeg,svg}', { eager: true })).map(mod => mod.default || mod),
    "Digital Twin": Object.values(import.meta.glob('../assets/Digital Twin/*.{png,jpg,jpeg,svg}', { eager: true })).map(mod => mod.default || mod),
    "Laser Turret": Object.values(import.meta.glob('../assets/Laser Turret/*.{png,jpg,jpeg,svg}', { eager: true })).map(mod => mod.default || mod),
};

const projectVideos = {
    "Sample Project": Object.values(
        import.meta.glob('../assets/Sample Project/*.{mp4,webm,ogg}', { eager: true })
    ).map(mod => mod.default || mod),

    "Digital Twin": Object.values(
        import.meta.glob('../assets/Digital Twin/*.{mp4,webm,ogg}', { eager: true })
    ).map(mod => mod.default || mod),
    "Laser Turret": Object.values(
        import.meta.glob('../assets/Laser Turret/*.{mp4,webm,ogg}', { eager: true })
    ).map(mod => mod.default || mod),
};

export function getImages(projectName) {
    return projectImages[projectName] || [];
}

export function getVideos(projectName) {
    return projectVideos[projectName] || [];
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
    video: getVideos("Digital Twin"),
    link: "#",
    skills: ["React", "UI", "Test", "Test1", "Test2", "Test3", "Test4", "Test5", "Test6"]
};

function ImgCarousel({ images }) {
    const [currentPos, setCurrentPos] = useState(0);
    const imageNumber = images.length;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
            <div style={{ width: '100%', alignItems: 'center' }}>
                <p>{decodeURIComponent(
                    images[currentPos]
                        .split('/')
                        .pop()
                        .replace(/\.[^/.]+$/, '')
                )}</p>

            </div>
        </div>

    );
}

export default function Project({ project = mockProject }) {
    console.log("Videos found:", project.video);
    return (
        <div className={styles.projectContainer}>
            <div style={{ flex: '1', margin: '10px' }}>
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
                        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
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
            </div>

            <div style={{ flex: '1', margin: '10px' }}>
                <div className={styles.projectCard}>
                    <div
                        style={{
                            height: '100%',
                            display: "flex",
                            justifyContent: "center", // horizontal centering
                            alignItems: "center",     // vertical centering
                            margin: "5px 0"           // optional spacing
                        }}
                    >
                        {project.video ? (
                            <video
                                src={project.video}
                                controls
                                autoPlay
                                muted
                                loop
                                playsInline
                                style={{ width: "100%", borderRadius: "12px", margin: '5px 40px', height: '100%'}}
                            />
                        ) : (
                            <p>No video available</p>
                        )}
                    </div>
                </div>

            </div>

        </div>
    );
}
