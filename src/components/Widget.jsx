import React from 'react';
import { WidgetCard } from '.';
import connectToStore from './HOCs/connetToStore';
import { getWeatherDataFor } from '../managers/getWeatherDataFor';

const Widget = ({
    loading,
    location,
    current,
    forecastday,
    weatherFor,
    query
}) => {

    return (
        <div className="app-content">
            <div className="app-content-wrapper">
                <div className="app-widget">
                    <WidgetCard
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
}), {});