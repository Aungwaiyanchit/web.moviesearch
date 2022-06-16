const BASIC_URL = 'https://api.themoviedb.org/3/'
const API_KEY = '?api_key=c9e1e6aa29a0a71e75f1283b538df6ce'

export const getResutls = async (option, query) => {
    const response = await fetch(`${BASIC_URL}${option}${API_KEY}${query}`).then(res => res.json())
    return response;
}


export const getPopular = async (query) => {
    const response = await fetch(`${BASIC_URL}${query}${API_KEY}`).then(res => res.json())
    return response;
}

export const getUpcomming = async (query) => {
    const response = await fetch(`${BASIC_URL}${query}${API_KEY}`).then(res => res.json())
    return response;
}

export const getTrending = async (query) => {
    const response = await fetch(`${BASIC_URL}${query}${API_KEY}`).then(res => res.json())
    return response;
}

export const getImage = async (query) => {
    const response = await fetch(`${BASIC_URL}${query}${API_KEY}`).then(res => res.json())
    return response;
}

export const getPersonDetails = async (query) => {
    const response = await fetch(`${BASIC_URL}${query}${API_KEY}`).then(res => res.json())
    return response;
}