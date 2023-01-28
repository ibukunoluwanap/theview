import Image from 'next/image'
import styles from '@/components/place/Place.module.css'

export default function Place() {
    return (
        <div className={styles.bg}>
            <div className="container my-5 p-3">
                <div className="row">
                    <div className="col-12">
                        <h2><span className="primary">...</span>Where to go</h2>
                    </div>
                </div>

                <div className="row">
                    <a href="#" className="col-sm-3 p-1">
                        <div className={styles.card}>
                            <Image
                                src="/explore_travel.png"
                                alt="Image"
                                width={0}
                                height={0}
                                className={styles.card_image}
                                unoptimized
                            />
                            <div className={styles.card_overlay}></div>
                            <h5 className={styles.card_title}>
                                Nicosia Full Day Shopping Tour from Paphos
                            </h5>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
