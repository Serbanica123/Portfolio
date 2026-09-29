import { useState } from "react";
import styles from "./Project.module.css";

function incrementImage(currentPos, imageNumber) {
    return (currentPos + 1 > imageNumber - 1) ? 0 : currentPos + 1;
}

function decrementImage(currentPos, imageNumber) {
    return (currentPos - 1 < 0) ? imageNumber - 1 : currentPos - 1;
}

function ImgCarousel({ images }) {
    const [currentPos, setCurrentPos] = useState(0);
    const imageNumber = images.length;

    if (imageNumber === 0) return null;

    const { src, caption } = images[currentPos];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignSelf: 'center' }}>
            <div className={styles.carouselContainer}>
                <img
                    src={src}
                    alt={caption}
                    loading="lazy"
                    className={styles.carouselImage}
                />
                {imageNumber > 1 && (
                    <>
                        <button
                            type="button"
                            aria-label="Previous image"
                            className={`${styles.carouselButton} ${styles.carouselButtonLeft}`}
                            onClick={() => setCurrentPos(decrementImage(currentPos, imageNumber))}
                        >
                            ❮
                        </button>
                        <button
                            type="button"
                            aria-label="Next image"
                            className={`${styles.carouselButton} ${styles.carouselButtonRight}`}
                            onClick={() => setCurrentPos(incrementImage(currentPos, imageNumber))}
                        >
                            ❯
                        </button>
                    </>
                )}
            </div>
            <div style={{ width: '100%', alignItems: 'center' }}>
                <p aria-live="polite">{caption}</p>
            </div>
        </div>

    );
}

export default function Project({ project }) {
    return (
        <div className={styles.projectContainer}>
            <div style={{ flex: '1', margin: '10px' }}>
                <div className={styles.projectCard}>
                    <h1 className={styles.projectTitle}>{project.title}</h1>
                    <div className={styles.projectContent}>
                        <div style={{ flex: 1 }}>
                            <div className={styles.projectDescription}>
                                {project.description}
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                                        <br />
                                        Github Page
                                    </a>
                                )}
                            </div>
                        </div>
                            <ImgCarousel images={project.images} />
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
                <div className={styles.projectCard} style={{backgroundColor:"transparent"}}>
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
                                autoPlay
                                muted
                                loop
                                playsInline
                                style={{ width: "100%", borderRadius: "12px", margin: '5px 40px', height: "95%" }}
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
