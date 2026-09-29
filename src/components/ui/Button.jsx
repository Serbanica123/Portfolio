import { Link } from "react-router-dom";
import styles from "./Button.module.css";

// A button-looking link. Use `to` for pages inside the site and `href` for files and other sites.
export default function Button({ to, href, variant = "primary", children, ...rest }) {
    const className = `${styles.button} ${styles[variant]}`;

    if (to) {
        return <Link to={to} className={className} {...rest}>{children}</Link>;
    }
    return <a href={href} className={className} {...rest}>{children}</a>;
}
