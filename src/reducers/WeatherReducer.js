import {
    WEATHER_REQUEST,
    WEATHER_RESPONSE
} from '../constants/ActionTypes';


const location = (state = {
    name: null,
    country: null,
    localtime: null
}) => {
    return {
        ...state,
        name: state.name,
        country: state.country,
        localtime: state.localtime
    }
}
const current = (state = {
    tempC: null,
    condition: {},
    humidity: null,
    cloud: null,
    pressureMb: null,
    windKph: null
}) => {
    return {
        ...state,
        tempC: state.tempC,
        condition: { ...state.condition, text: state.condition.text, icon: state.condition.icon },
        humidity: state.humidity,
        cloud: state.cloud,
        pressureMb: state.pressureMb,
        windKph: state.windKph
    }
}

const forecastday = (state = {
    forecastday: []
}) => {
    return {
        ...state,
        forecastday: [...state.forecastday]
    }
}

const error = (state ={
    code: null,
    message: null
}) => {
    return {
        ...state,
        code: state.code,
        message: state.message
    }
}

const weather = (state = {
    loading: false,
    location: location(),
    current: current(),
    forecastday: forecastday(),
    error: error()
}, { type, payload }) => {
    switch (type) {
        case WEATHER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case WEATHER_RESPONSE:
            return {
                ...state,
                loading: false,
                location: location(payload.data.location),
                current: current(payload.data.current),
                forecastday: forecastday(payload.data.forecast),
                error: error(payload.data.error)
            }
        default:
            break;
    }
}

const Weather = (state = {}, { type, payload }) => {
    switch (type) {
        case WEATHER_REQUEST:
        case WEATHER_RESPONSE:
            return {
                ...state,
                [payload.weatherFor]: weather(state[payload.weatherFor], {
                    type,
                    payload
                })
            };
        default:
            return state;
    };
};

export default Weather;