import React from "react";
import styles from "../Sections/AboutMe.module.css"
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import SkillBars from "../Skills";
const about = {
    img: "src\\assets\\ProfilePicture.png",
    description: "",
    links: {
        linkedin: <a href="https://www.linkedin.com/in/alexandru-serban-b25a31235/"><FaLinkedin /></a>,
        github: <a href="https://github.com/Serbanica123?tab=repositories"><FaGithub /></a>,
        facebook: <a href="https://www.facebook.com/alex.serban.1804"><FaFacebookF /></a>,
    }
}

function AboutText() {
    return (<div className={styles.aboutText}>
        <p>
            I am a motivated Mechatronics Engineering graduate with a strong passion for robotics, automation, and advanced control systems. Over the past years, I have gained hands-on experience in robotics software, control engineering, CAD design, and computer vision, through both international internships and competitive robotics projects.
        </p>

        <p>
            My expertise spans across C++, Python, ROS2, Matlab/Simulink, and CAD design (SolidWorks CSWP/CSWA), combined with practical skills in 3D printing, embedded systems, and machine learning for robotics. I have developed and tuned advanced controllers (MPC, PID, Kalman Filter) and built modular robotic platforms integrating computer vision and mechanical design.
        </p>

        <p>
            I thrive in multidisciplinary teams, where I enjoy both developing scalable software solutions and designing innovative mechanical systems. Beyond technical work, I have a strong background in mentoring and leadership, supporting new team members and ensuring knowledge transfer in robotics teams.
        </p>

        <p>
            My long-term goal is to contribute to the development of autonomous systems, intelligent robotics, and next-generation manufacturing solutions, where I can combine my creativity, problem-solving mindset, and drive for innovation.
        </p>

    </div>)
}

function Profile() {
    return (<div>
        <ul className={styles.mainList}>
            <li >
                <div>
                    <img className={styles.profileImg} src={about.img}></img>
                </div>
            </li>
            <li>
                <div>
                    <ul className={styles.contactList}>{Object.entries(about.links).map(([key, value]) => (
                        <li key={key} className="">{value}</li>
                    ))}</ul>
                </div>
            </li>
        </ul>
    </div>)
}

export default function AboutMe() {
    return (
        <>
            <section className={styles.sectionAbout} id="about">
                <ul style={{listStyle:'none'}}>
                    <li><AboutText /></li>
                    <li><SkillBars/></li>
                </ul>
                
                <Profile />
                
            </section>
        </>

    )
}