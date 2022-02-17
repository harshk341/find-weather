import React, { memo } from 'react';
import { Current, Forecast, Location } from '.';

const WidgetCard = ({
    loading,
    location,
    current,
    forecast
}) => {
    if (loading) {
        return <div></div>
    } else {
        return (
            <div className="widget">
                <div className="widget-wrapper">
                    <Location {...location} />
                    <Current {...current} />
                    <Forecast {...forecast} />
                </div>
            </div>
        );
    }
}

export default memo(WidgetCard);