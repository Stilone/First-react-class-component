import {CREATE_CHARACTERS} from '../actions/action-characters';
import {GET_CHARACTER, CHARACTER_ERROR} from "../actions/action-character";

export const CharacterReducer = (state = {
    characters: [],
    character: [],
    isLoading: true,
    count: '',
    pagination: '',
    error: true
}, action) => {
    switch (action.type) {
        case CREATE_CHARACTERS:
            return {
                ...state,
                characters: action.payload.result,
                isLoading: false,
                count: action.payload.count,
                pagination: action.payload.pagination
            }
        case GET_CHARACTER:
            return {...state, character: action.payload, error: false}
        case CHARACTER_ERROR:
            return {...state, error: action.payload}
        default:
            return {...state}
    }
}