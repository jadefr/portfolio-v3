import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_text}>
                Developed in
                <span className={styles.span}>
                    <a href="https://github.com/jadefr/portfolio-v3" target="_blank"
                       rel="noopener noreferrer" className={styles.a_next}>Next.js</a>
                </span>
                by
                <span className={styles.span}>Jade Ferreira</span>
            </div>

            <div className={styles.footer_icons}>
                <a href="https://github.com/jadefr" target="_blank"
                   rel="noopener noreferrer">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width={25}
                         height={25}/>
                </a>
                <a href="https://linkedin.com/in/jadefr" target="_blank"
                   rel="noopener noreferrer">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" width={25}
                         height={25} className={styles.linkedin}/>
                </a>
            </div>

        </footer>
    )
}

export default Footer