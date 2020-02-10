import * as axios from "axios";


const instance = axios.create({
    baseURL: `https://www.omdbapi.com/`
});


export const moviesAPI = {
    getMovies(s, page = 1) {
        let url = "?i=tt3896198&apikey=8523cbb8&";
        if (s) {
            url = url + `s=${s}&page=${page}`;
        } else {
            url = url + `&page=${page}`;
        }

        return instance.get(url)
            .then(response => {
                if (response.data.Response === "False") {
                    return Promise.reject(response.data.Error);
                } else {
                    let data_for_site = {
                        totalResults: response.data.totalResults,
                        movies: response.data.Search
                    }
                    return data_for_site;
                }})
    }
}
