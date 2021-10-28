import React, {Component} from 'react';
import {ComponentCharacter} from '../components/component-character';

export class PageCharacter extends Component {
    componentDidMount() {
        this.props.onGetCharacter(this.props.itemId)
    }

    render() {
        const {character, error} = this.props
        return (
            <div>
                <ComponentCharacter character={character} error={error}/>
            </div>
        );
    }
};