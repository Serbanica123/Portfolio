import Project from "../Project"
import styles from "../Sections/Projects.module.css";
import {getImages} from "../Project"
const projects = [
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