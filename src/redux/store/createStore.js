import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {CharacterReducer} from '../reducer/characterReucer';

export const store = createStore(CharacterReducer, applyMiddleware(thunk))