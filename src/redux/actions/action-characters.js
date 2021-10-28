export const CREATE_CHARACTERS = 'CREATE_CHARACTERS'

export const getCharactersAction = (pagination) => {
    return (dispatch) => {
        fetch('https://swapi.dev/api/people/?page=' + pagination)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data.results)
                dispatch({
                    type: CREATE_CHARACTERS,
                    payload: {
                        result: data.results,
                        count: Math.ceil(data.count / 10),
                        pagination: Number(pagination)
                    },
                })
            })
    }
}