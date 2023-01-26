import styles from '@/components/search/Search.module.css'

export default function Search() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-sm-8 mt-5">
                    <input type="text" class={`form-control ${styles.input}`} placeholder="Going where?" />
                </div>
            </div>
        </div>
    )
}
