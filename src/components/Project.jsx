import { useState } from "react";
const projectImages = {
    "Sample Project": Object.values(import.meta.glob('../assets/Sample Project/*.{png,jpg,jpeg,svg}', { eager: true })).map(mod => mod.default || mod),
    "Another Project": Object.values(import.meta.glob('../assets/Another Project/*.{png,jpg,jpeg,svg}', { eager: true })).map(mod => mod.default || mod),
};

function getImages(projectName) {
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
    description: "This is a sample project to test the card design.",
    images: getImages("Sample Project"),
    link: "#",
    tags: ["React", "UI", "Test"]
};

function ImgCarousel({images}){
    const [currentPos, setCurrentPos] = useState(0);
    const imageNumber = images.length;

    return ( <div
            style={{
                position: 'relative',   // <-- important
                width: '35vh',          // set the container size
                height: '35vh',
            }}
        >
            <img
                src={images[currentPos]}
                alt={`Project ${currentPos}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' }}
            />

            <button
                onClick={() => setCurrentPos(decrementImage(currentPos, imageNumber))}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '-30px',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255, 255, 255, 0)', // transparent
                    border: 'none',
                    padding: '10px',
                    cursor: 'pointer',
                    height: '100%',
                    color: ' rgba(216, 54, 54, 0.603)',
                    fontSize: '25px',
                    width: '30px'
                }}
            >
                ❮
            </button>

            <button
                onClick={() => setCurrentPos(incrementImage(currentPos, imageNumber))}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-30px',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255, 255, 255, 0)', // transparent
                    border: 'none',
                    padding: '10px',
                    cursor: 'pointer',
                    height: '100%',
                    color: ' rgba(216, 54, 54, 0.603)',
                    fontSize: '25px',
                    width: '30px'
                }}
            >
                ❯
            </button>
        </div>)
}

export default function Project({ project = mockProject }) {

    return (
       <ImgCarousel images={project.images}/>
    )
}