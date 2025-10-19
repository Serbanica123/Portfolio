import React from "react";
import styles from "../components/AboutMe.module.css"
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
const about = {
    img: "src\\assets\\ProfilePicture.png",
    description: "",
    skills: {},
    contact: {
        facebook: <a href="https://www.facebook.com/alex.serban.1804"><FaFacebookF /></a>,
        linkedin: <a href="https://www.linkedin.com/in/alexandru-serban-b25a31235/"><FaLinkedin /></a>,
        github: <a href="https://github.com/Serbanica123?tab=repositories"><FaGithub /></a>,
        phone: <a href="tel: +40733978308"><FaPhone /> +40733978308</a>,
    }

}
export default function AboutMe() {
    return (
        <section className={styles.sectionAbout} id="about">
            <div>
                <img className={styles.profileImg} src={about.img}></img>
            </div>
            <div>
                <ul>{Object.entries(about.contact).map(([key, value]) => (
                    <li key={key} className="">{value}</li>
                ))}</ul>
            </div>

        </section>
    )
}