import Image from 'next/image'
import styles from '@/components/restaurant/Restaurant.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Restaurant() {
    return (
        <>
            <div className={`container-fluid position-relative  ${styles.container} bg_primary`}>
                <div className={styles.bg}></div>
                <div className={` ${styles.explore_container} text-center`}>
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={100}
                        height={100}
                        unoptimized
                    />
                    <h1 className="text-white">
                        The Best of the Best
                    </h1>
                    <p className="explore_subtext">
                        The only thing better than a good meal is a good conversation over that meal.
                    </p>
                    <a href="#restaurant" className="btn btn-dark">
                        <b>Get the taste <span className="primary">...</span></b>
                    </a>
                </div>
            </div>

            <div id="restaurant" className="container my-5 p-3">
                <div className="row">
                    <div className="col-sm-3 p-1">
                        <div className={styles.card}>
                            <Image
                                src="/explore_travel.png"
                                alt="Image"
                                width={0}
                                height={0}
                                className={styles.card_image}
                                unoptimized
                            />
                            <a href="#" className={styles.like}>
                                <FontAwesomeIcon icon={faHeart} />
                            </a>
                            <div className={styles.card_body}>
                                <a href="#" className="black text-decoration-none">
                                    <h5 className={styles.card_title}>
                                        <b>Nicosia Full Day Shopping Tour from Paphos</b>
                                    </h5>
                                </a>
                                <p className={`${styles.card_price}`}>
                                    from <b className='primary'>1 CELO</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
