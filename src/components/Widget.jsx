import React from 'react';
import { DATA as data } from '../rawData';
import { WidgetCard } from '.';

const Widget = () => {

    const renderCard = ({
        location,
        current,
        forecast
    }) => {
        return <WidgetCard
            location={location}
            current={current}
            forecast={forecast}
        />
    }

    return (
        <div className="app-content">
            <div className="app-content-wrapper">
                <div className="app-widget">
                    {renderCard(data)}
                </div>
            </div>
        </div>
    );
}

export default Widget;