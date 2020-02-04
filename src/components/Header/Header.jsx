import React from 'react';
import styles from "./Header.module.css";
import Login from "./Login/Login";
import SearchBox from "./SearchBox/SearchBox"
import {moviesAPI} from "../../api/api";

const Header = (props) => {

    let changeSearchBox = (value) => {
        props.changeSearchBox(value);
    }

    let getMovies = (value) => {
        changeSearchBox(value.SearchMovie);
        if (!value.SearchMovie) {
            return undefined;
        }
        props.setIsFetching(true);
        props.setCurrentPage(1);
        moviesAPI.getMovies(value.SearchMovie, 1)
            .then(response => {
                if (response.data.Response === "False") {
                    props.setError(response.data.Error);
                } else {

                    let data_for_site = {
                        totalResults: response.data.totalResults,
                        movies: response.data.Search
                    }
                    props.setMovies(data_for_site);
                    props.setIsFetching(false);
                }
            })

    }

    return (<>
            <div className={styles.container}>
                <div className={styles.logo}>Movie Catalog</div>
                <SearchBox onSubmit={getMovies}/>
                <Login/>
            </div>

        </>
    )
}

export default Header;