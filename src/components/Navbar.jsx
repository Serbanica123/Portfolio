import React from "react";
import styles from "../components/Navbar.module.css"
import pdf from "../assets/Alexandru-Nicolae-Serban-FlowCV-Resume-20251011.pdf"

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <div className={styles.left}></div>
                <div className={styles.right}>
                    <ul>
                    <li><a href="#about">About me</a></li>
                    <li><a href="#work">Work Experience</a></li>
                    <li><a href="#projects">Personal Projects</a></li>
                    <li><a href="#hobbies">Hobbies</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href={pdf} target="_blank">Resume</a></li>
                    </ul>
                </div>

            </div>

        </nav>
    )
}