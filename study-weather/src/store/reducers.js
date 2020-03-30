import { fromJS } from 'immutable'

const defaultState = fromJS({
    city: '',
    cityHistory: [],
    weatherData: {},
    forecast: [],
    init: true
})

export default (state = defaultState, action) => {
    if (action.type === 'CURRENT_CITY') {
        return state.set('city', action.city)
    }
    if (action.type === 'CURRENT_WEATHER') {
        return state.set('weatherData', action.weatherData)
    }
    if (action.type === 'FORECAST_WEATHER') {
        return state.set('forecast', action.forecast)
    }
    if (action.type === 'FIRST_INIT') {
        return state.set('init', false)
    }
    if (action.type === 'CHANGE_CITY') {
        return state.merge({
            city: action.city,
            cityHistory:[...new Set(state.get('cityHistory').concat(action.city))]
        })
    }
    return state
}