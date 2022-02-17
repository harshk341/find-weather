import { combineReducers } from "redux";
import WeatherReducer from './WeatherReducer';
import QueryReducer from "./QueryReducer";

export default combineReducers({
    weather: WeatherReducer,
    query: QueryReducer
});