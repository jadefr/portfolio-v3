import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>

            <Head>
                <title>Jade Ferreira | Portfolio</title>
                <meta name="description" content="Portfolio for BackEnd Engineer"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main_index}>
                <h1 className={styles.title}>
                    BackEnd <span className={styles.span}>Engineer</span>
                </h1>

                <div className={styles.tech}>
                    <ul className={styles.ul}>
                        <li>Java</li>
                        <li>Kubernetes</li>
                        <li>Docker</li>
                        <li>Shell Script</li>
                        <li>JavaScript</li>
                        <li>NodeJS</li>
                    </ul>
                    <ul className={styles.ul}>
                        <li>Systems Design</li>
                        <li>Project Planning</li>
                        <li>Documentation</li>
                    </ul>
                </div>
            </main>

        </div>
    )
}
