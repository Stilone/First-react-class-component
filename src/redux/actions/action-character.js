export const GET_CHARACTER = 'GET_CHARACTER'
export const CHARACTER_ERROR = 'CHARACTER_ERROR'

export const getCharacterAction = (itemId) => {
    return (dispatch) => {
        fetch('https://swapi.dev/api/people/' + itemId)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    dispatch({
                        type: CHARACTER_ERROR,
                        payload: true
                    })
                }
            })
            .then(data => {
                if (data) {
                    dispatch({
                        type: GET_CHARACTER,
                        payload: data
                    })
                }
            })
    }
}