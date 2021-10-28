import {connect} from 'react-redux';
import {PageComponent} from '../../page-components/components/component-general.page';
import {getCharactersAction} from './action-characters';
import {getCharacterAction} from "./action-character";

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
        character: state.character,
        isLoading: state.isLoading,
        count: state.count,
        pagination: state.pagination,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetCharacters: (pagination) => {
            dispatch(getCharactersAction(pagination))
        },
        onGetCharacter: (itemId) => {
            dispatch(getCharacterAction(itemId))
        }
    }
}

export const Page = connect(mapStateToProps, mapDispatchToProps)(PageComponent)