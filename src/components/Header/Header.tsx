import React, {FC} from 'react';
import {connect} from "react-redux";
import {getMovies} from "../../redux/searchInfo-reducer";
import styles from "./Header.module.css";
import Login from "./Login/Login";
import SearchBox from "./SearchBox/SearchBox"

type PropsType = {
    getMovies: (value: string) => void
}

type SearchMovieType = string | null

type FormValueType = {
    value: SearchMovieType
}

const Header: FC<PropsType> = ({getMovies}) => {

    let getMoviesFromSearchBox = (value: any) => {
        if (value.SearchMovie) {
            getMovies(value.SearchMovie.trim())
        } else {
            getMovies(value.SearchMovie)
        }
    }

    return (<>
            <div className={styles.container}>
                <div className={styles.logo}>Catalog</div>
                <SearchBox onSubmit={getMoviesFromSearchBox} onChange={getMoviesFromSearchBox}/>
                <Login/>
            </div>

        </>
    )
}

export default connect( null ,{getMovies})(Header);;