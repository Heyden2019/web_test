import Header from "./Header";
import {connect} from "react-redux";
import {changeSearchBoxAC, setCurrentPageAC, setIsFetchingAC} from "./../../redux/searchInfo-reducer";
import {setErrorAC, setMoviesAC} from "../../redux/searchInfo-reducer";


const mapStateToProps = (state) => {
    return {
        searchBox: state.SearchInfoPage.searchBox,
        isFetching: state.SearchInfoPage.isFetching,
        Error: state.SearchInfoPage.Error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeSearchBox: (value) => {
            dispatch(changeSearchBoxAC(value));
        },

        setMovies: (value) => {
            dispatch(setMoviesAC(value));
        },

        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page));
        },

        setIsFetching: (value) => {
            dispatch(setIsFetchingAC(value));
        },

        setError: (error) => {
            dispatch(setErrorAC(error));
        }
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;