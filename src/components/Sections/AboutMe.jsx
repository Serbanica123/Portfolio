import styles from "../Sections/AboutMe.module.css"
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

import SkillBars from "../Skills";
import profileImg from "../../assets/ProfilePicture.png";
const about = {
    img: profileImg,
    description: "",
    links: {
        linkedin: <a href="https://www.linkedin.com/in/alexandru-serban-b25a31235/" aria-label="LinkedIn"><FaLinkedin /></a>,
        github: <a href="https://github.com/Serbanica123?tab=repositories" aria-label="GitHub"><FaGithub /></a>,
        facebook: <a href="https://www.facebook.com/alex.serban.1804" aria-label="Facebook"><FaFacebookF /></a>,
    }
}

const openToWorkRoles = [
    "Robotics Engineer",
    "Mechatronics Engineer",
    "Automation Engineer",
    "Control Systems Engineer",
    "Embedded Systems Engineer",
    "Simulation Engineer (ROS/Isaac Sim)",
    "Computer Vision Engineer",
    "Mechanical Design Engineer (CAD/SolidWorks)",
    "3D Printing & Prototyping Specialist",
    "PLC Programmer"
];


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
                    <img className={styles.profileImg} src={about.img} alt="Alexandru Serban" />
                </div>
            </li>
            <li>
                <div>
                    <ul className={styles.contactList}>{Object.entries(about.links).map(([key, value]) => (
                        <li key={key} className="">{value}</li>
                    ))}</ul>
                </div>
            </li>
            <li>
                <div>
                    <ul style={{ listStyle: 'none', padding: "0", alignItems: 'center' }}>
                        <li><h1 style={{ fontSize: '30px', textAlign: "center" }}>Open to work</h1></li>
                        {openToWorkRoles.map((role, id) => (<li style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }} key={id}><div className={styles.openToWork}>{role}</div></li>))}
                    </ul>
                </div>
            </li>
        </ul>
    </div>)
}

export default function AboutMe() {
    return (
        <>
            <section id="about">
                <div className={styles.sectionAbout}>
                    <div className={styles.sectionAboutLeft}>
                        {/* <ul style={{ listStyle: 'none' }}>
                            <li><AboutText /></li>
                            <li><SkillBars /></li>
                        </ul> */}
                        <AboutText />
                        <SkillBars />
                    </div>
                    <Profile />
                </div>
            </section>
        </>

    )
}