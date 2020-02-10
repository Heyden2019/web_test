import Header from "./Header";
import {connect} from "react-redux";
import {changeSearchBox, setCurrentPage, setIsFetching} from "./../../redux/searchInfo-reducer";
import {setError, getMovies} from "../../redux/searchInfo-reducer";


const mapStateToProps = (state) => {
    return {
        searchBox: state.SearchInfoPage.searchBox,
        isFetching: state.SearchInfoPage.isFetching,
        Error: state.SearchInfoPage.Error
    }
}

const HeaderContainer = connect(mapStateToProps, {
    changeSearchBox, setCurrentPage, setIsFetching, setError, getMovies
})(Header);

export default HeaderContainer;