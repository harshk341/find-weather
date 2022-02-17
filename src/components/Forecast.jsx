import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Forecast = ({
    forecastday
}) => {

    return (
        <div className="widget-forecast">
            {
                forecastday.map(
                    ({ day, date }, index) => {
                        return (
                            <div key={index}>
                                <span>
                                    {
                                        new Date(date).getDate() === new Date().getDate() ?
                                            'Today' :
                                            new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(new Date(date))
                                    }
                                </span>
                                <img src={day.condition.icon} alt="icon" />
                                <span>{day.condition.text}</span>
                                <span>{day.avgtempC}&#176;C</span>
                            </div>
                        )
                    }
                )
            }
        </div>
    );
}

Forecast.propTypes = {
    forecastday: PropTypes.array
}

Forecast.defaultProps = {
    forecastday: []
}

export default memo(Forecast);