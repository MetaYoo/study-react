
const cityApi = (city) => ({
    type: 'CURRENT_CITY',
    city
})

const weatherApi = (data) => ({
    type: 'CURRENT_WEATHER',
    weatherData: data
})

const forecastApi = (data) => ({
    type: 'FORECAST_WEATHER',
    forecast:data
})

export const getCity = (city) => {
    return (dispatch) => {
        const action = cityApi(city);
        dispatch(action);
    }
}

export const getWeather = (data) => {
    return (dispatch) => {
        const action = weatherApi(data)
        dispatch(action)
    }
}

export const getForecast = (data) => {
    return (dispatch) => {
        const action = forecastApi(data)
        dispatch(action)
    }
}

export const getInit = () => {
    return (dispatch) => {
        const action = {
            type : 'FIRST_INIT',
            init: false
        }
        dispatch(action)
    }
}

export const changeCity = (city) => {
    return dispatch => {
        const action = {
            type : 'CHANGE_CITY',
            city: city
        }
        dispatch(action)
    }
}