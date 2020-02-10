import React from 'react';
import styles from "./Content.module.css"
import Preloader from "../Preloader/Preloader";
import {paginator} from "../../utils/paginator";

const Content = (props) => {

    let Pages = paginator(props.totalResults, props.currentPage);

    if (!props.searchBox) {
        props.setError("Hello, try to find the movie")
    }

    if (props.Error ) {
        return (
        <h2>{props.Error}</h2>
        )

    } else {
        return (<>
                {props.searchBox ?
                    <h2>You searched for: {props.searchBox}, {props.totalResults} results found</h2> :
                    <h2>All Movies, {props.movies.length} </h2>
                }

                {props.isFetching ?
                    <Preloader/> :
                    <></>
                }
                <div className={styles.paginator}>
                    {Pages.map(page => (
                        <span key={page}
                              className={props.currentPage === page ? styles.pageActive : ""}
                              onClick={() => props.changePage(props.searchBox, page) }>{page}</span>
                    ))}
                </div>
                <div className={styles.searchItems}>
                    {props.movies.map(movie => (
                            <div className={styles.searchItem} key={movie.imdbID}>
                                <img src={movie.Poster} alt="poster" width={200} height={300}/>
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
}

export default Content;