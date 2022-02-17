import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Location = ({
    name,
    country,
    localtime
}) => {
    return (
        <div className="widget-location">
            <span className="city-name">{name}, {country}</span>
            <span className="localtime">{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(localtime))}</span>
        </div>
    );
}

Location.propTypes = {
    name: PropTypes.string,
    country: PropTypes.string,
    localtime: PropTypes.string
}

export default memo(Location);