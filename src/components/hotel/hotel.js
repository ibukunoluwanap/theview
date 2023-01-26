import Image from 'next/image'
import styles from '@/components/hotel/Hotel.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Hotel() {
    return (
        <div className="container my-5 p-3">
            <div className="row">
                <div className="col-sm-3  p-1">
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
    )
}
