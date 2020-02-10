import React from 'react';
import styles from "./Header.module.css";
import Login from "./Login/Login";
import SearchBox from "./SearchBox/SearchBox"

const Header = (props) => {

    let getMovies = (value) => {
        props.getMovies(value.SearchMovie)
    }

    return (<>
            <div className={styles.container}>
                <div className={styles.logo}>Movie Catalog</div>
                <SearchBox onSubmit={getMovies} onChange={getMovies}/>
                <Login/>
            </div>

        </>
    )
}

export default Header;