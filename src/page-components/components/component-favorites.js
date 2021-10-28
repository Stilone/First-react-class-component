import React, {Component} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import '../../css/general.css';


export class ComponentFavorites extends Component {
    render() {
        const {favoriteCharacter, deletedFavorite} = this.props
        let nameDeleted = ''
        const handleClick = () => {
            deletedFavorite(nameDeleted)
        }
        return (
            <div className={'favorites'}>
                <Autocomplete
                    disablePortal
                    id='combo-box-demo'
                    options={favoriteCharacter}
                    onInputChange={(event, newInputValue) => {
                        nameDeleted = newInputValue
                    }}
                    key={Math.random()}
                    sx={{width: 300}}
                    renderInput={(params) => <TextField  {...params} label='Избранное'/>}
                />
                <Button onClick={handleClick}>удалить</Button>
            </div>
        )
    }
}