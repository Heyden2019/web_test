import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://www.omdbapi.com/`
});

export const moviesAPI = {
    async getMovies(s, page = 1) {
        const url = "?i=tt3896198&apikey=8523cbb8&" + (s ? `s=${s}&page=${page}` : `&page=${page}`);
        const response = await instance.get(url);
        if (response.data.Response === "False") {
            return Promise.reject(response.data.Error);
        } else {
            return {
                totalResults: response.data.totalResults,
                movies: response.data.Search
            };
        }
    }
}
