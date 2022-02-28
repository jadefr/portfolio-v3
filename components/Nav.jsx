import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <div>
            <nav className="nav navbar navbar-expand-lg p-3 border-bottom align-items-center navbar-dark">

                <Link href="/" passHref>
                    <a className={styles.a}><h2 className="pointer">Jade Ferreira</h2></a>
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup" data-toggle="collapse" data-target=".navbar-collapse">
                    <div className="navbar-nav">
                        <Link href="/work" passHref>
                            <a className={styles.a}><p className="ms-5 pointer lead my-auto">Work</p></a>
                        </Link>

                        <Link href="/education" passHref>
                            <a className={styles.a}><p className="ms-5 pointer lead my-auto">Education</p></a>
                        </Link>

                        <Link href="/projects" passHref>
                            <a className={styles.a}><p className="ms-5 pointer lead my-auto">Projects</p></a>
                        </Link>

                        <Link href="/papers" passHref>
                            <a className={styles.a}><p className="ms-5 pointer lead my-auto">Papers</p></a>
                        </Link>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Nav