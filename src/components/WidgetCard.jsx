import React, { memo } from 'react';
import { Current, Forecast, Location } from '.';

const WidgetCard = ({
    location,
    current,
    forecast
}) => {
    return (
        <div className="widget">
            <div className="widget-wrapper">
                <Location {...location} />
                <Current {...current} />
                <Forecast {...forecast} />
            </div>
        </div>
    )
}

export default memo(WidgetCard);