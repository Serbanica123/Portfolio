import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../../data/profile";
import styles from "./SocialLinks.module.css";

const icons = {
    linkedin: { icon: FaLinkedin, label: "LinkedIn" },
    github: { icon: FaGithub, label: "GitHub" },
    facebook: { icon: FaFacebookF, label: "Facebook" },
};

// The social icons. The links come from `links` in data/profile.js.
export default function SocialLinks({ size = "normal" }) {
    return (
        <ul className={`${styles.list} ${styles[size]}`}>
            {Object.entries(profile.links).map(([key, url]) => {
                const { icon: Icon, label } = icons[key];
                return (
                    <li key={key}>
                        <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
                            <Icon />
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}
