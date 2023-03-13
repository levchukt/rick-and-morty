
import { charactersAPI } from "../api/api"


const SET_CHARACTERS = 'SET_CHARACTERS';
const SET_FORM_VALUE = 'SET_FORM_VALUE';
const SET_FILTER = 'SET_FILTER';

const initialState = {
    characters: [],
    pageSize: 10,
}

const charactersReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_CHARACTERS:
            return {
                ...state,
                characters: action.characters,
                filteredArray: action.characters
            }
        case SET_FORM_VALUE:
            return {
                ...state,
                formValue: action.text
            }
        default:
            return state
    }
}


const setCharacters = (characters) => ({type: SET_CHARACTERS, characters })

export const requestCharacters = () => {
    return async (dispatch) => {
        
        let responce = await charactersAPI.getCharacters();
        const characters = responce.data.results
        dispatch(setCharacters(characters))
    }
}

const setFormValue = (text) => ({ type: SET_FORM_VALUE, text});

export const sendFormValue = (text) => {
    return (dispatch) => {
        dispatch(setFormValue(text))
    }
}

const setFilter = (filteredCharacters) => {
    return {
        type: SET_FILTER,
        filteredCharacters
    }
}

export const filterCharacters = (filteredCharacters) => {
    return (dispatch) => {
        dispatch(setFilter(filteredCharacters))
    }
}


export default charactersReducer;