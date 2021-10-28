import React, {Component} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import '../../css/general.css';

export class ComponentCardCharacters extends Component {
    render() {
        const {characters, getFavorites, pagination} = this.props

        const id = (index, pagination) => {
            const newPagination = (pagination - 1) * 10
            const newIndex = index + 1
            return newIndex + newPagination
        }

        return (
            <div className='charCards'>
                {characters.map((char, index) => {
                    return <Card key={char.name} sx={{minWidth: 275}}>
                        <CardContent>
                            <Typography sx={{fontSize: 10}} color='text.secondary' gutterBottom>
                                Имя:
                            </Typography>
                            <Typography variant='h5' component='div'>
                                {char.name}
                            </Typography>
                            <Typography sx={{mb: 1.5}} color='text.secondary'>
                                Гендер:
                            </Typography>
                            <Typography variant='body2'>
                                {char.gender}
                                <br/>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={'/people/' + id(index, pagination)} className={'linkBtn'}>подробнее</Link>
                            <Button className={'linkBtn'} onClick={() => {
                                return getFavorites(index)
                            }
                            }>В избранное</Button>
                        </CardActions>
                    </Card>
                })}
            </div>
        );
    }
};