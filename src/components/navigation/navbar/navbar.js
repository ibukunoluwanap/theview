import Image from 'next/image'
import styles from '@/components/navigation/navbar/Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faHeart, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <nav className="navbar border-bottom navbar-expand-md fixed-top">
            <div className="container-fluid">
                <a href="/">
                    <Image
                        src="/logo.svg"
                        alt="The View Logo"
                        width={180}
                        height={37}
                    />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className={`nav-item ${styles.nav_item}`}>
                            <a className={`nav-link ${styles.nav_link}`} aria-current="page" href="#">
                                <FontAwesomeIcon icon={faHome} /> Home
                            </a>
                        </li>
                        <li className={`nav-item ${styles.nav_item}`}>
                            <a className={`nav-link ${styles.nav_link}`} aria-current="page" href="#">
                                <FontAwesomeIcon icon={faHeart} /> Tips
                            </a>
                        </li>
                    </ul>

                    <div class="d-flex">
                        <a href="#" class={`btn ${styles.btn} btn-dark`}>
                            <FontAwesomeIcon icon={faRightFromBracket} /> Login
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
