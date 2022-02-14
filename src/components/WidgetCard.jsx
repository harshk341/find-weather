import React, { memo } from 'react';

const WidgetCard = ({
    location,
    current,
    forecast
}) => {
    console.log(forecast);
    return (
        <div className="widget">
            <div className="widget-wrapper">
                <div className="widget-location">
                    <span className="city-name">{location.name}, {location.country}</span>
                    <span className="localtime">{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(location.localtime))}</span>
                </div>
                <div className="widget-weather-current">
                    <div className="weather-condition">
                        <span className="current-temp">{current.temp_c}°C</span>
                        <img className="condition-icon" src={current.condition.icon} alt="icon" />
                        <span className="condition-text">{current.condition.text}</span>
                    </div>
                    <div className="weather-description">
                        <p><span className="bi bi-droplet"></span>{current.humidity}%</p>
                        <p><span className="bi bi-cloud"></span>{current.cloud}%</p>
                        <p><span className="bi bi-speedometer2"></span>{current.pressure_mb}mb</p>
                        <p><span className="bi bi-wind"></span>{current.wind_kph}km/h</p>
                    </div>
                </div>
                <div className="widget-forecast">
                    {
                        forecast.forecastday.map(
                            ({ day, date }, index) => {
                                return (
                                    <div key={index}>
                                        <span>
                                            {
                                                new Date(date).getDate() === new Date().getDate() ?
                                                    'Today':
                                                    new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(new Date(date))
                                            }
                                        </span>
                                        <img src={day.condition.icon} alt="icon" />
                                        <span>{day.condition.text}</span>
                                        <span>{day.avgtemp_c}°C</span>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default memo(WidgetCard);