import React, {FC} from "react"
import styles from "./Content.module.css";

type PropsType = {
    Pages: Array<number>
    currentPage: number
    searchBox: string
    changePage: (searchBox: string, page: number) => void
}

const Paginator: FC<PropsType> = ({Pages, currentPage, searchBox, changePage}) => {
    return (
        <div className={styles.paginator}>
            {Pages.map(page => (
                <span key={page}
                      className={currentPage === page ? styles.pageActive : ""}
                      onClick={() => changePage(searchBox, page)}>
                            {page}
                    </span>
            ))}
        </div>
    )
}

export default Paginator