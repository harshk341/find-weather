import { createSelector } from "reselect";
import { getWeather } from "../selectors/getWeather";
import { getQuery } from '../selectors/getQuery';
import { getWeatherData } from "./getWeatherData";

export const getWeatherDataFor = createSelector(
    getWeather,
    getQuery,
    getWeatherData
);