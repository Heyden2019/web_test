import React from 'react';
import styles from "./Content.module.css"
import {moviesAPI} from "../../api/api";
import Preloader from "../Preloader/Preloader";

const Content = (props) => {
    let Totalpages = props.totalResults / 10;
    if (Totalpages !== parseInt(Totalpages)) {
        Totalpages = parseInt(Totalpages) + 1;
    }

    let Pages = [];
    if (Totalpages > 10) {
        for (let i = props.currentPage - 3; i <= props.currentPage + 3; i++) {
            if (i < 2) {
                continue;
            } else if (i > Totalpages - 1) {
                continue;
            } else {
                Pages.push(i);
            }
        }
        Pages = [1, ...Pages, parseInt(Totalpages)];
    } else {
        for (let i = 0; i < Totalpages; i++) {
            Pages.push(i + 1);
        }
    }

    let setCurrentPage = (page) => {
        props.setCurrentPage(page);
    }

    let changePage = (page) => {
        setCurrentPage(page);
        props.setIsFetching(true);
        moviesAPI.getMovies(props.searchBox, page)
            .then(response => {
                let data_for_site = {
                    totalResults: response.data.totalResults,
                    movies: response.data.Search
                }
                props.setMovies(data_for_site);
                props.setIsFetching(false);
            })

    }

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
                              onClick={() => changePage(page)}>{page}</span>
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