import React, {Component} from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import '../../css/general.css';

export class ComponentPagination extends Component {
    constructor(props) {
        super(props);
        this.handleChange = (event) => {
            props.onGetCharacters(event.target.textContent)
        }
    }

    render() {
        return (
            <Stack spacing={1}>
                <Pagination onChange={this.handleChange} className='pagination' count={Number(this.props.count)}/>
            </Stack>
        );
    }
};