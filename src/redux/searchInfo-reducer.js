
const CHANGE_SEARCH_BOX = 'CHANGE_SEARCH_BOX';
const SET_MOVIES = 'SET_MOVIES';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const ERROR = 'ERROR';

let initialState = {
    movies: [
        {Poster: 1, Title: 'Batman', Year: 1962, imdbID: '2387hd8', Type: 'Movie'},
        {Poster: 1, Title: 'Batman', Year: 1962, imdbID: '2387hd9', Type: 'Movie'},
        {Poster: 1, Title: 'Batman', Year: 1962, imdbID: '2387hd7', Type: 'Movie'},
        {Poster: 1, Title: 'Batman', Year: 1962, imdbID: '2387hd6', Type: 'Movie'},
        {Poster: 1, Title: 'Batman', Year: 1962, imdbID: '2387hd5', Type: 'Movie'}
    ],
    searchBox: "",
    isFetching: false,
    totalResults: null,
    currentPage: 1,
    Error: "Hello, try to find the movie"
};

const SearchInfoReducer = (state = initialState, action) => {
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

export const changeSearchBoxAC = (value) => ({type: CHANGE_SEARCH_BOX, value});
export const setMoviesAC = (data) => ({type: SET_MOVIES, data});
export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, page});
export const setIsFetchingAC = (value) => ({type: SET_IS_FETCHING, value});
export const setErrorAC = (error) => ({type: ERROR, error});


export default SearchInfoReducer;