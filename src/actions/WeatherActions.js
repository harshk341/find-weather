import {
    WEATHER_REQUEST,
    WEATHER_RESPONSE
} from '../constants/ActionTypes';
import { getUrl } from '../helpers/getUrl';
import { WEATHER_URL } from '../constants/Urls';
import { apiCaller } from '../helpers/apiCaller';
import camelize from 'camelize';

const weatherRequest = weatherFor => ({
    type: WEATHER_REQUEST,
    payload: { weatherFor }
});

const weatherResponse = (weatherFor, data) => ({
    type: WEATHER_RESPONSE,
    payload: { weatherFor, data }
});

const clientRequiredWeather = (weatherFor, query) => async dispatch => {
    dispatch(weatherRequest(weatherFor));
    try {
        if (query) {
            const url = getUrl(WEATHER_URL, query);
            const data = await apiCaller(url);
            const result = camelize(data);

            dispatch(weatherResponse(weatherFor, result));
        }
    } catch (err) {
        console.log(err);
    }
}

const clientRequestForWeather = (weatherFor, query) => (
    dispatch,
    getState
) => {
    const state = getState();
    const { weather } = state;
    const isWeatherForExist = !!weather[weatherFor];

    if (!isWeatherForExist) {
        dispatch(clientRequiredWeather(weatherFor, query));
    }
}

export {
    weatherRequest,
    weatherResponse,
    clientRequiredWeather,
    clientRequestForWeather
}