import { useState } from "react";
import { FaGithub } from "react-icons/fa";
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
    description: "This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.",
    images: getImages("Sample Project"),
    link: "#",
    skills: ["React", "UI", "Test", "Test1", "Test2", "Test3", "Test4", "Test5", "Test6"]
};

function ImgCarousel({ images }) {
    const [currentPos, setCurrentPos] = useState(0);
    const imageNumber = images.length;

    return (<div
        style={{
            position: 'relative',   // <-- important
            display: 'flex',
            justifyContent: 'center',  // horizontal centering
            alignItems: 'center',      // vertical centering
        }}
    >
        <img
            src={images[currentPos]}
            alt={`Project ${currentPos}`}
            style={{
                width: '27vh',          // set the container size
                height: '27vh', objectFit: 'cover', borderRadius: '5px'
            }}
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
        <div style={{ display: 'flex'  ,width: '100%'}}>
            <div style={{ flex: '49vw', position: 'relative', padding: '10px', backgroundColor: "rgba(216, 54, 54, 0.603)", borderRadius: "20px", display: 'flex', flexDirection: "column", alignItems: 'center' , margin:'5px 40px 5px 40px'}}>
                <h1 style={{ textAlign: 'center', font: '20px', margin: '10px' }}>{project.title}</h1>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: '20px',
                        width: '45vw'
                    }}
                >
                    <div style={{ flex: '1'}}>
                        <p style={{ textAlign: 'justify' }}>  {project.description}{' '}
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>
                                    <br></br>Github Page
                                </a>
                            )}</p>

                        <div>
                            <p style={{ marginBottom: '5px' }}>Skills and Technologies:</p>
                            <ul
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    listStyle: 'none',
                                    gap: '10px',
                                    padding: 0,
                                    margin: 0
                                }}
                            >
                                {project.skills.map((skill, id) => (
                                    <li
                                        key={id}
                                        style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                            borderRadius: '8px',
                                            padding: '5px 10px',
                                            minWidth: '80px',
                                            textAlign: 'center'
                                        }}
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div style={{
                        flex: '0 0 auto',       // take only the space needed by the content
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '0px 40px 0px 40px'
                    }}>
                        <ImgCarousel images={project.images} />
                    </div>
                </div>
            </div>
            <div style={{ flex: '50vw'}}></div>
        </div>

    )
}