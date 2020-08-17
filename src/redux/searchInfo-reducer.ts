import {moviesAPI} from "../api/api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./Store";

const CHANGE_SEARCH_BOX = 'CHANGE_SEARCH_BOX';
const SET_MOVIES = 'SET_MOVIES';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const ERROR = 'ERROR';

type ActionsTypes = ChangeSearchBoxType | SetMoviesType | SetCurrentPageType | SetIsFetchingType | SetErrorType

type MovieType = {
    Poster: number,
    Title: string,
    Year: number,
    imdbID: string,
    Type: string
}

type initialStateType = {
    movies: Array<MovieType> | null,
    searchBox: string | null,
    isFetching: boolean,
    totalResults: number | null,
    currentPage: number | null,
    Error: string | null
}

let initialState: initialStateType = {
    movies: [
        {Poster: 1, Title: 'Batman', Year: 1962, imdbID: '2387hd8', Type: 'Movie'},
    ],
    searchBox: "",
    isFetching: false,
    totalResults: null,
    currentPage: 1,
    Error: "Hello, try to find the movie"
};

const SearchInfoReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch(action.type) {
        case CHANGE_SEARCH_BOX:
            return {
                ...state,
                searchBox: action.value
            }
        case SET_MOVIES:
            return {
                ...state,
                movies: [...action.data.movies],
                totalResults: action.data.totalResults,
                Error: ""
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.value
            }
        case ERROR:
            return {
                ...state,
                Error: action.error
            }
        default:
            return state;
    }
}

type ChangeSearchBoxType = {
    type: typeof CHANGE_SEARCH_BOX,
    value: string
}
export const changeSearchBox = (value: string): ChangeSearchBoxType => ({type: CHANGE_SEARCH_BOX, value});

type DataType = {
    movies: Array<MovieType>,
    totalResults: number
}
type SetMoviesType = {
    type: typeof SET_MOVIES,
    data: DataType
}
export const setMovies = (data: DataType): SetMoviesType => ({type: SET_MOVIES, data});

type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE,
    page: number
}
export const setCurrentPage = (page: number): SetCurrentPageType => ({type: SET_CURRENT_PAGE, page});

type SetIsFetchingType = {
    type: typeof SET_IS_FETCHING,
    value: boolean
}
export const setIsFetching = (value: boolean): SetIsFetchingType => ({type: SET_IS_FETCHING, value});

type SetErrorType = {
    type: typeof ERROR,
    error: string
}
export const setError = (error: string): SetErrorType => ({type: ERROR, error});

type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
export const getMovies = (SearchMovie: string): ThunkType => {
    return async (dispatch: DispatchType) => {
        dispatch(changeSearchBox(SearchMovie));
        if (!SearchMovie) {
            return undefined;
        }
        dispatch(setIsFetching(true));
        dispatch(setCurrentPage(1));
        try {
            const data: DataType = await moviesAPI.getMovies(SearchMovie, 1)
            dispatch(setMovies(data));
        } catch (error) {
            dispatch(setError(error));
        }
        dispatch(setIsFetching(false));
    }
}

export const changePage = (searchText: string, Page: number): ThunkType => {
    return async (dispatch: DispatchType) => {
        dispatch(setCurrentPage(Page));
        dispatch(setIsFetching(true));
        let data: DataType = await moviesAPI.getMovies(searchText, Page)
        dispatch(setMovies(data));
        dispatch(setIsFetching(false));
    }
}

export default SearchInfoReducer;