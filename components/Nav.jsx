import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        // <div>
        //     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        //         <a className="navbar-brand" href="#">Navbar</a>
        //         <button className="navbar-toggler" type="button" data-toggle="collapse"
        //                 data-target="#navbarNavAltMarkup"
        //                 aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        //             <div className="navbar-nav">
        //                 <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
        //                 <a className="nav-item nav-link" href="#">Features</a>
        //                 <a className="nav-item nav-link" href="#">Pricing</a>
        //                 <a className="nav-item nav-link disabled" href="#">Disabled</a>
        //             </div>
        //         </div>
        //     </nav>


            <nav className="nav p-3 border-bottom align-items-center">

                <Link href="/" passHref>
                    <a className={styles.a}><h2 className="pointer">Jade Ferreira</h2></a>
                </Link>

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
            </nav>
        // </div>
    )
}

export default Nav