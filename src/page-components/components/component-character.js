import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../../css/general.css';

export class ComponentCharacter extends Component {
    render() {
        const {character, error, onGetLoading} = this.props

        const errorCheck = (character, error) => {
            if (!error) {
                return <div>
                    <Link to='/' className={'linkBtn'}>назад</Link>
                    <Card className={'charCard'}>
                        <CardContent>
                            <CardContent className='cardContentHeader'>
                                <Typography sx={{fontSize: 14}} color='text.secondary' gutterBottom>
                                    имя:
                                </Typography>
                                <Typography variant='h5' component='div'>
                                    {character.name}
                                </Typography>
                                <Typography sx={{mb: 1.5}} color='text.secondary'>
                                    gender:
                                </Typography>
                                <Typography variant='body2'>
                                    {character.gender}
                                </Typography>
                            </CardContent>
                            <CardContent className={'cardContentFooter'}>
                                <Typography variant='body2'>
                                    цвет глаз: {character.eye_color}
                                </Typography>
                                <Typography variant='body2'>
                                    цвет волос: {character.hair_color}
                                </Typography>
                                <Typography variant='body2'>
                                    рост: {character.height}
                                </Typography>
                                <Typography variant='body2'>
                                    вес: {character.mass}
                                </Typography>
                            </CardContent>
                        </CardContent>
                    </Card>
                </div>
            } else {
                return <div>
                    <Link to='/' className={'linkBtn'}>назад</Link>
                    <Card className={'charCard'}>
                        <CardContent className='cardContentHeader'>
                            <Typography variant='h5' component='div'>
                                {'Ошибка сервера'}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            }
        }
        return (
            <div>
                {errorCheck(character, error)}
            </div>
        );
    }
};