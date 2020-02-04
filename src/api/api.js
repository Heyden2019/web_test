import * as axios from "axios";


const instance = axios.create({
    baseURL: `https://www.omdbapi.com/`
});


export const moviesAPI = {
    getMovies(s, page = 1) {

        if (s) {
            return instance.get(`?i=tt3896198&apikey=8523cbb8&s=${s}&page=${page}`);
        } else {
            return instance.get(`?i=tt3896198&apikey=8523cbb8&page=5`);
        }
    }
}

