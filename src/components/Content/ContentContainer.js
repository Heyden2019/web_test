import Content from "./Content";
import {connect} from "react-redux";
import {setCurrentPageAC, setErrorAC, setIsFetchingAC, setMoviesAC} from "../../redux/searchInfo-reducer";

const mapStateToProps = (state) => {
    return {
        movies: state.SearchInfoPage.movies,
        searchBox: state.SearchInfoPage.searchBox,
        totalResults: state.SearchInfoPage.totalResults,
        currentPage: state.SearchInfoPage.currentPage,
        isFetching: state.SearchInfoPage.isFetching,
        Error: state.SearchInfoPage.Error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page));
        },

        setMovies: (value) => {
            dispatch(setMoviesAC(value));
        },

        setIsFetching: (value) => {
            dispatch(setIsFetchingAC(value));
        },

        setError: (error) => {
            dispatch(setErrorAC(error));
        }
    }
}



const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content);

export default ContentContainer;