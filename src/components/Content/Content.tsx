import React, {FC} from 'react';
import styles from "./Content.module.css"
import Preloader from "../Preloader/Preloader";
import {paginator} from "../../utils/paginator";
import {MovieType} from "../../types/types";

type PropsType = {
    totalResults: number
    currentPage: number
    searchBox: string
    setError: (error: string) => void
    Error: string
    movies: Array<MovieType>,
    isFetching: boolean
    changePage: (searchBox: string, page: number) => void
}

const Content: FC<PropsType> = ({totalResults, currentPage,
                                    searchBox, setError, Error,
                                    movies, isFetching,
                                    changePage}) => {

    let Pages: Array<number> = paginator(totalResults, currentPage);

    if (!searchBox) {
        setError("Hello, try to find the movie")
    }

    if (Error) {
        return (<h2>{Error}</h2>)
    }

    return (<>
            {searchBox ?
                <h2>You searched for: {searchBox}, {totalResults} results found</h2> :
                <h2>All Movies, {movies.length} </h2>
            }

            {isFetching && <Preloader/>}
            <div className={styles.paginator}>
                {Pages.map(page => (
                    <span key={page}
                          className={currentPage === page ? styles.pageActive : ""}
                          onClick={() => changePage(searchBox, page)}>
                            {page}
                    </span>
                ))}
            </div>
            <div className={styles.searchItems}>
                {movies.map(movie => (
                        <div className={styles.searchItem} key={movie.imdbID}>
                            <img src={movie.Poster.toString()} alt="poster" width={200} height={300}/>
                            <div>Name: {movie.Title}</div>
                            <div>Year: {movie.Year}</div>
                            <div>imdbID: {movie.imdbID}</div>
                            <div>Type: {movie.Type}</div>
                        </div>
                    )
                )}
            </div>
        </>
    )
}

export default Content;