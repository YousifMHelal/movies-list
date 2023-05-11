import { AllMOVIES } from "./Types"

const inital = {
    movies: [],
    pageCount: 0
}

export const moviesReducer = (state = inital, action) => {
    switch (action.type) {
        case AllMOVIES:
            return { movies: action.data, pageCount: action.pages }
        default:
            return state;
    }
}