import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../../data/profile";
import Section from "../ui/Section";
import Button from "../ui/Button";
import styles from "./Contact.module.css";

export default function Contact() {
    return (
        <Section id="contact" title="Contact">
            <div className={styles.box}>
                <p className={styles.text}>{profile.contactText}</p>
                <a href={`mailto:${profile.email}`} className={styles.email}>
                    {profile.email}
                </a>
                <div className={styles.buttons}>
                    <Button href={`mailto:${profile.email}`}>
                        <FaEnvelope /> Send an email
                    </Button>
                    <Button href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" variant="secondary">
                        <FaLinkedin /> LinkedIn
                    </Button>
                    <Button href={profile.links.github} target="_blank" rel="noopener noreferrer" variant="secondary">
                        <FaGithub /> GitHub
                    </Button>
                    <Button href={profile.resume} target="_blank" rel="noopener noreferrer" variant="secondary">
                        Download CV
                    </Button>
                </div>
            </div>
        </Section>
    );
}
