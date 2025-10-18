import React from "react";
import styles from "../components/AboutMe.module.css"

export default function AboutMe() {
    return (
        <section className={styles.sectionAbout} id="about">
        <img className={styles.profileImg} src="src\assets\ProfilePicture.png"></img>
        </section>
    )
}