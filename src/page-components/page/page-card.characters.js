import React, {Component} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {ComponentCardCharacters} from '../components/component-card.characters';
import {ComponentPagination} from '../components/component-pagination';
import {ComponentFavorites} from '../components/component-favorites';
import '../../css/general.css'

export class PageCardCharacters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteCharacter: []
        }
    }

    getFavorites = (index) => {
        this.setState({favoriteCharacter: this.state.favoriteCharacter.concat(this.props.characters[index].name)})
    }
    deletedFavorite = (name) => {
        this.state.favoriteCharacter.splice(name, 1)
    }

    render() {
        const {characters, isLoading, onGetCharacters, count, pagination} = this.props

        const loadCheck = () => {
            if (isLoading) {
                return <Box sx={{display: 'flex'}}>
                    <CircularProgress className='loading'/>
                </Box>
            } else {
                return <div>
                    <ComponentFavorites
                        favoriteCharacter={this.state.favoriteCharacter}
                        deletedFavorite={this.deletedFavorite}
                    />
                    <ComponentCardCharacters
                        characters={characters}
                        getFavorites={this.getFavorites}
                        count={count}
                        pagination={pagination}
                    />
                    <ComponentPagination
                        onGetCharacters={onGetCharacters}
                        count={count}
                    />
                </div>
            }
        }
        return (
            <div>
                {loadCheck()}
            </div>
        );
    }
};
