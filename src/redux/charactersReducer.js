
import { charactersAPI } from "../api/api"


const SET_CHARACTERS = 'SET_CHARACTERS';
const SET_FORM_VALUE = 'SET_FORM_VALUE';
const SET_FILTER = 'SET_FILTER';
const SET_CHARACTER = 'SET_CHARACTER';

const initialState = {
    characters: [],
    pageSize: 10,
    searchTerm: '',
    profile: null,
}

const charactersReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_CHARACTERS:
            return {
                ...state,
                characters: action.characters,
            }
        case SET_FILTER:
            return {
                ...state,
                searchTerm: action.term
            }
        case SET_CHARACTER:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}


const setCharacters = (characters) => ({ type: SET_CHARACTERS, characters });
const setFormValue = (text) => ({ type: SET_FORM_VALUE, text });
const setFilter = (term) => ({ type: SET_FILTER, term });
const setCharacter = (profile) => ({type: SET_CHARACTER, profile})

export const requestCharacters = (term) => {
    return async (dispatch) => {
        
        let responce = await charactersAPI.getCharacters(term);
        const characters = responce.data.results
        dispatch(setFilter(term))
        dispatch(setCharacters(characters, term))
        
    }
}

export const sendFormValue = (text) => {
    return (dispatch) => {
        dispatch(setFormValue(text))
    }
}

export const getCharacter = (id) => {
    return async (dispatch) => {
        const responce = await charactersAPI.getCharacter(id)

        dispatch(setCharacter(responce.data))
    }
}


export default charactersReducer;