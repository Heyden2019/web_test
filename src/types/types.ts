export type MovieType = {
    Poster: number,
    Title: string,
    Year: number,
    imdbID: string,
    Type: string
}

export type DataType = {
    movies: Array<MovieType>,
    totalResults: number,
}

export type ErrorType = {
    Error: string
}