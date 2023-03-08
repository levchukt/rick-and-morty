
import { charactersAPI } from "../api/api"


const SET_CHARACTERS = 'SET_CHARACTERS';

const initialState = {
    characters: [],
    pageSize: 8,
    totalUsersCount: 100,
    formValue: ''
}

const charactersReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_CHARACTERS:
            return {
                ...state,
                characters: action.characters
            }
    }
    return state
}


export const setCharacters = (characters) => ({type: SET_CHARACTERS, characters })

export const requestCharacters = () => {
    return async (dispatch) => {
        
        let responce = await charactersAPI.getCharacters();
        const characters = responce.data.results
        dispatch(setCharacters(characters))
    }
}

export default charactersReducer;