import { useEffect, useState } from "react";
import styles from "./Gallery.module.css";

// A grid of photos with captions. Clicking a photo opens it big (use ← → and Esc on the keyboard).
export default function Gallery({ images }) {
    const [open, setOpen] = useState(null);
    const count = images.length;

    useEffect(() => {
        if (open === null) return;

        function onKey(event) {
            if (event.key === "Escape") setOpen(null);
            if (event.key === "ArrowRight") setOpen((i) => (i + 1) % count);
            if (event.key === "ArrowLeft") setOpen((i) => (i - 1 + count) % count);
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, count]);

    if (count === 0) return null;

    return (
        <>
            <ul className={styles.grid}>
                {images.map((image, i) => (
                    <li key={image.src}>
                        <button type="button" className={styles.thumb} onClick={() => setOpen(i)}>
                            <img src={image.src} alt={image.caption} loading="lazy" />
                        </button>
                        <p className={styles.caption}>{image.caption}</p>
                    </li>
                ))}
            </ul>

            {open !== null && (
                <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={images[open].caption} onClick={() => setOpen(null)}>
                    <figure onClick={(event) => event.stopPropagation()}>
                        <img src={images[open].src} alt={images[open].caption} />
                        <figcaption>
                            {images[open].caption} <span>({open + 1} / {count})</span>
                        </figcaption>
                    </figure>
                    <button type="button" aria-label="Close" className={`${styles.control} ${styles.close}`} onClick={() => setOpen(null)}>✕</button>
                    {count > 1 && (
                        <>
                            <button
                                type="button"
                                aria-label="Previous photo"
                                className={`${styles.control} ${styles.prev}`}
                                onClick={(event) => { event.stopPropagation(); setOpen((open - 1 + count) % count); }}
                            >❮</button>
                            <button
                                type="button"
                                aria-label="Next photo"
                                className={`${styles.control} ${styles.next}`}
                                onClick={(event) => { event.stopPropagation(); setOpen((open + 1) % count); }}
                            >❯</button>
                        </>
                    )}
                </div>
            )}
        </>
    );
}
