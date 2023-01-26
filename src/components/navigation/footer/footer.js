import Image from 'next/image'
import styles from '@/components/navigation/footer/Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer className="footer border-top bg-white py-5">
            <div className="container">
                <div className="row">
                    <div className="col d-flex">
                        <a href="/">
                            <Image
                                src="/logo.svg"
                                alt="The View Logo"
                                width={180}
                                height={37}
                            />
                        </a>

                        <div className="col">

                            Made by <a href="https://ibukunoluwanap.github.io/" target="_blank" className="primary text-decoration-none">ibukunoluwanap</a>

                            <ul className="list-unstyled d-flex">
                                <li>
                                    <a href="https://github.com/ibukunoluwanap/theview" target="_blank" className="black text-decoration-none px-2">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/ibukunoluwanap/" target="_blank" className="black text-decoration-none px-2">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://linkedin.com/in/ibukunoluwanap/" target="_blank" className="black text-decoration-none px-2">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://facebook.com/ibukunoluwanaphtali/" target="_blank" className="black text-decoration-none px-2">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com/ibukunoluwanap/" target="_blank" className="black text-decoration-none px-2">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
