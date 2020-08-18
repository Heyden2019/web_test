import Content from "./Content";
import {connect} from "react-redux";
import {setError, changePage} from "../../redux/searchInfo-reducer";
import {MovieType} from "../../types/types";
import {AppStateType} from "../../redux/Store";
import { compose } from "redux";

type MapStateToPropsType = {
    movies: Array<MovieType>,
    searchBox: string,
    totalResults: number,
    currentPage: number,
    isFetching: boolean,
    Error: string
}

type  MapDispatchToPropsType = {
    setError: (error: string) => void,
    changePage: (searchBox: string, pageNumber: number) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        movies: state.SearchInfoPage.movies,
        searchBox: state.SearchInfoPage.searchBox,
        totalResults: state.SearchInfoPage.totalResults,
        currentPage: state.SearchInfoPage.currentPage,
        isFetching: state.SearchInfoPage.isFetching,
        Error: state.SearchInfoPage.Error
    }
}

export default compose(
    // TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
        mapStateToProps, {setError, changePage})
)(Content);