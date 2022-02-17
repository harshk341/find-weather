import React, { useEffect } from 'react';
import { WidgetCard } from '.';
import connectToStore from './HOCs/connetToStore';
import { getWeatherDataFor } from '../managers/getWeatherDataFor';
import { initQuery } from '../actions/QueryActions';
import { clientRequestForWeather } from '../actions/WeatherActions';
import { IP_URL } from '../constants/Urls';

const Widget = ({
    loading,
    location,
    current,
    forecastday,
    weatherFor,
    query,
    initQuery,
    clientRequestForWeather
}) => {
    
    
    useEffect(() => {
        
        initQuery(IP_URL);
        
    }, [initQuery]);
    
    useEffect(() => {
        
        clientRequestForWeather(weatherFor, query);

    }, [weatherFor, query]);

    return (
        <div className="app-content">
            <div className="app-content-wrapper">
                <div className="app-widget">
                    <WidgetCard
                        loading={loading}
                        location={location}
                        current={current}
                        forecast={forecastday}
                    />
                </div>
            </div>
        </div>
    );
}

export default connectToStore(Widget, (state) => ({
    ...getWeatherDataFor(state)
}), {
    initQuery,
    clientRequestForWeather
});