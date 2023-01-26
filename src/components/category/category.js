import styles from '@/components/category/Category.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotel, faPlaneArrival, faMountainCity, faBowlFood } from '@fortawesome/free-solid-svg-icons'

export default function Category() {
    return (
        <div className="container">

            <div className="row">
                <div className="col-12">
                    <h2><span className="primary">...</span>view the word</h2>
                </div>
            </div>

            <div className="row">
                <a href="#" className={`col-6 col-sm-3 p-1 ${styles.category_item}`}>
                    <div className={`${styles.category_name}`}>
                        Hotels <FontAwesomeIcon icon={faHotel} />
                    </div>
                </a>
                <a href="#" className={`col-6 col-sm-3 p-1 ${styles.category_item}`}>
                    <div className={`${styles.category_name}`}>
                        Restaurants <FontAwesomeIcon icon={faBowlFood} />
                    </div>
                </a>
                <a href="#" className={`col-6 col-sm-3 p-1 ${styles.category_item}`}>
                    <div className={`${styles.category_name}`}>
                        Attraction <FontAwesomeIcon icon={faMountainCity} />
                    </div>
                </a>
                <a href="#" className={`col-6 col-sm-3 p-1 ${styles.category_item}`}>
                    <div className={`${styles.category_name}`}>
                        Flights <FontAwesomeIcon icon={faPlaneArrival} />
                    </div>
                </a>
            </div>
        </div>
    )
}
