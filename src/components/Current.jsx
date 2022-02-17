import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Current = ({
    tempC,
    condition,
    humidity,
    cloud,
    pressureMb,
    windKph
}) => {
    return (
        <div className="widget-weather-current">
            <div className="weather-condition">
                <span className="current-temp">{tempC}&#176;C</span>
                <img className="condition-icon" src={condition.icon} alt="icon" />
                <span className="condition-text">{condition.text}</span>
            </div>
            <div className="weather-description">
                <p><span className="bi bi-droplet"></span>{humidity}%</p>
                <p><span className="bi bi-cloud"></span>{cloud}%</p>
                <p><span className="bi bi-speedometer2"></span>{pressureMb}mb</p>
                <p><span className="bi bi-wind"></span>{windKph}km/h</p>
            </div>
        </div>
    );
}

Current.propTypes = {
    tempC: PropTypes.number,
    condition: PropTypes.shape({
        text: PropTypes.string,
        icon: PropTypes.string
    }),
    humidity: PropTypes.number,
    cloud: PropTypes.number,
    pressureMb: PropTypes.number,
    windKph: PropTypes.number
}

export default memo(Current);