import Project from "../Project"
import styles from "../Sections/Projects.module.css";
import { getImages } from "../Project";

const projects = [
    {
        title: "Digital twin of Flexible Automated Future Factory(FLUFFY) in Nvidia Isaac Sim",
        description: <div className="max-h-64 overflow-y-auto p-4 bg-white rounded-lg shadow">
            <p>
                Developed a fully functional <strong>digital twin</strong> of the FLUFFY automated factory system in <strong>NVIDIA Isaac Sim</strong>, built from scratch to serve as a foundation for future <strong>human–robot safety</strong> development and system optimization.
            </p>

            <h4 className="mt-4 font-medium">Implementation:</h4>
            <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Imported and simplified the CAD model in <strong>Onshape</strong>, defined <strong>joints</strong>, <strong>limits</strong>, and <strong>collision meshes</strong> for accurate physics simulation.</li>
                <li>Configured sensors and collision detection within <strong>Isaac Sim</strong> using <strong>Python</strong>.</li>
                <li>Designed a <strong>builder pattern</strong> to automatically generate actuator paths for over <strong>30 actuators</strong>, streamlining the simulation setup.</li>
                <li>Implemented a <strong>finite state machine (FSM)</strong> to demonstrate the system’s functionality by cycling trays between assembly lines.</li>
            </ul>

            <h4 className="mt-4 font-medium">Result:</h4>
            <p>
                Created a realistic, modular simulation environment where the FLUFFY system operates autonomously, enabling the integration and testing of <strong>human safety algorithms</strong> and future digital twin expansions.
            </p>
        </div>
        ,
        images: getImages("Digital Twin"),
        link: "#",
        skills: ["Python", "Software in the Loop", "Finite State Machine", "Builder Pattern", "Isaac Sim", "Onshape", "CAD", "Pneumatics", "Actuatuors", "PID control", "Linux", "Git"]
    },
    {
        title: "Sample Project",
        description:
            "This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.",
        images: getImages("Sample Project"),
        link: "#",
        skills: ["React", "UI", "Test", "Test1", "Test2", "Test3", "Test4", "Test5", "Test6"]
    },
    {
        title: "Sample Project",
        description:
            "This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.",
        images: getImages("Sample Project"),
        link: "#",
        skills: ["React", "UI", "Test", "Test1", "Test2", "Test3", "Test4", "Test5", "Test6"]
    },
    {
        title: "Sample Project",
        description:
            "This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.This is a sample project to test the card design.",
        images: getImages("Sample Project"),
        link: "#",
        skills: ["React", "UI", "Test", "Test1", "Test2", "Test3", "Test4", "Test5", "Test6"]
    }
];


export default function Projects() {
    return (
        <>
            <section className={styles.projects} id="projects" style={{ width: "100%" }}>
                {projects.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </section>
        </>

    )
}