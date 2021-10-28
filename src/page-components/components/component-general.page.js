import React, {Component} from 'react';
import {PageCardCharacters} from '../page/page-card.characters';
import {PageCharacter} from '../page/page-character';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

export class PageComponent extends Component {
    componentDidMount() {
        this.props.onGetCharacters('1')
    }

    render() {
        const {
            characters,
            count,
            pagination,
            onGetCharacters,
            onGetCharacter,
            character,
            isLoading,
            error
        } = this.props

        return (
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <PageCardCharacters
                            characters={characters}
                            count={count}
                            pagination={pagination}
                            onGetCharacters={onGetCharacters}
                            isLoading={isLoading}
                        />
                    </Route>
                    <Route path='/people/:id'
                           render={({match}) => {
                               const {id} = match.params
                               return <PageCharacter
                                   itemId={id}
                                   onGetCharacter={onGetCharacter}
                                   character={character}
                                   error={error}
                               />
                           }}/>
                </Switch>
            </Router>
        )
    }
}