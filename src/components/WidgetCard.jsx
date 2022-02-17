import React, { memo } from 'react';
import { Current, Forecast, Location } from '.';

const WidgetCard = ({
    loading,
    code,
    location,
    current,
    forecast
}) => {
    return (
        <>
            {
                (!loading && !code) && <div className="app-widget">
                    <div className="widget">
                        <div className="widget-wrapper">
                            <Location {...location} />
                            <Current {...current} />
                            <Forecast {...forecast} />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default memo(WidgetCard);