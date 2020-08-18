import axios from "axios";
import {MovieType, DataType} from "../types/types";

const instance = axios.create({
    baseURL: `https://www.omdbapi.com/`
});

type ResponseType = {
    data: {
        Response: "True" | "False",
        Error: string,
        totalResults: number,
        Search: Array<MovieType>
    }
}

export const moviesAPI = {
    async getMovies(s: string, page: number = 1) {
        const url = "?i=tt3896198&apikey=8523cbb8&" + (s ? `s=${s}&page=${page}` : `&page=${page}`);
        const response: ResponseType = await instance.get(url);
        if (response.data.Response === "False") {
            return Promise.reject(response.data.Error);
        } else {
            return {
                totalResults: response.data.totalResults,
                movies: response.data.Search
            } as DataType;
        }
    }
}
