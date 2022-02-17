import { createSelector } from "reselect";
import { getWeather } from "../selectors/getWeather";
import { getWeatherData } from "./getWeatherData";

export const getWeatherDataFor = createSelector(
    getWeather,
    getWeatherData
);