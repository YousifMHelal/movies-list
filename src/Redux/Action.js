import { AllMOVIES, movieApi } from '../Redux/Types'
import axios from 'axios'



export const getAllMovies = () => {
    return async (dispatch) => {
        const res = await axios.get(movieApi)
        dispatch({
            type: AllMOVIES,
            data: res.data.results,
            pages: res.data.total_pages
        })
    }
}

export const getSearchedMovies = (word) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=987ad6fe44b4a35d5d0d5b616b840702&language=en-US&query=${word}`)
        dispatch({
            type: AllMOVIES,
            data: res.data.results,
            pages: res.data.total_pages
        })
    }
}

export const getPages = (page) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=987ad6fe44b4a35d5d0d5b616b840702&language=en-US&page=${page}`)
        dispatch({
            type: AllMOVIES,
            data: res.data.results,
            pages: res.data.total_pages
        })
    }
}

