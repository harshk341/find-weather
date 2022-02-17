import { WEATHER_FOR } from '../constants/GlobalKey';

const loadingData = (weatherFor, weather) => {
    return !!weather[weatherFor] ? weather[weatherFor].loading : false;
}

const locationData = (weatherFor, weather) => {
    return !!weather[weatherFor] ? {
        ...weather[weatherFor].location
    } : {
        name: null,
        country: null,
        localtime: null
    }
}

const currentData = (weatherFor, weather) => {
    return !!weather[weatherFor] ? {
        ...weather[weatherFor].current,
        condition: { ...weather[weatherFor].current.condition }
    } : {
        tempC: null,
        condition: {},
        humidity: null,
        cloud: null,
        pressureMb: null,
        windKph: null
    }
}

const forecastdayData = (weatherFor, weather) => {
    return !!weather[weatherFor] ? {
        ...weather[weatherFor].forecastday,
        forecastday: [...weather[weatherFor].forecastday.forecastday]
    } : {
        forecastday: []
    }
}

const errorData = (weatherFor, weather) => {
    return !!weather[weatherFor] ? {
        ...weather[weatherFor].error
    } : {
        code: null,
        message: null
    }
}

export const getWeatherData = (weather, query) => {
    const weatherFor = [WEATHER_FOR, query || 'default'].join('|');

    return {
        loading: loadingData(weatherFor, weather),
        location: locationData(weatherFor, weather),
        current: currentData(weatherFor, weather),
        forecastday: forecastdayData(weatherFor, weather),
        error: errorData(weatherFor, weather),
        weatherFor,
        query
    }
}