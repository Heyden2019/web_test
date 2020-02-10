import Content from "./Content";
import {connect} from "react-redux";
import {setError, setIsFetching, getMovies, changePage} from "../../redux/searchInfo-reducer";

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

const ContentContainer = connect(mapStateToProps, {
    setError, setIsFetching, getMovies, changePage
})(Content);

export default ContentContainer;