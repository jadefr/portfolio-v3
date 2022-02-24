import styles from "../styles/Home.module.css";
import Head from "next/head";

const Papers = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Papers</title>
                <meta name="description" content="Published Papers"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <h2 className={styles.subtitle}>Published Papers</h2>

            <main className={styles.main}>

                <div className={styles.card_papers_1}>
                    <a href="https://www.inderscience.com/info/ingeneral/forthcoming.php?jcode=ijcat" className={styles.a_section} target="_blank"
                       rel="noopener noreferrer">
                        <h4>Ontology-based data integration for the internet of things in a scientific software ecosystem</h4>
                    </a>
                    <h5>International Journal of Computer Applications in Technology (In Press)</h5>
                    <p>DOI: 10.1504/IJCAT.2022.10044215</p>
                </div>

                <div className={styles.card_papers_2}>
                    <a href="https://ieeexplore.ieee.org/abstract/document/8791911" className={styles.a_section} target="_blank"
                       rel="noopener noreferrer">
                        <h4>Supporting the Collaborative Research through Semantic Data Integration</h4>
                    </a>
                    <h5>2019 IEEE 23rd International Conference on Computer Supported Cooperative Work in Design (CSCWD)</h5>
                    <h6>DOI: 10.1109/CSCWD46598.2019</h6>
                </div>

            </main>
        </div>
    )
}

export default Papers