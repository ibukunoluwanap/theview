import styles from '@/components/hotel/Hotel.module.css'

export default function ExploreHotel() {
    return (
        <div className={`container-fluid position-relative ${styles.bg} my-5 py-3 px-5`}>
            <div className="row">
                <div className={`col ${styles.explore_container}`}>
                    <h1 className="explore_text ">
                        The world is a book, and those who do not travel read only a page!
                    </h1>
                    <p className="explore_subtext">
                        Saint Augustine
                    </p>
                    <a href="#" className="btn btn-light bg_white">
                        Explore <span className="primary">...</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
