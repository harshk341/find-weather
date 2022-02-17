import React from 'react';
import connectToStore from './HOCs/connetToStore';
import { queryChange } from '../actions/QueryActions';
import { history } from '../helpers/history';

const Header = ({
    queryChange
}) => {

    const handleKeyUp = event => {
        const { target, keyCode, which } = event;
        const { value } = target;
        const str = value.trim();

        if (keyCode === 13 || which === 13) {
            if (str !== '') {
                history.push('weather?q=' + str);
                queryChange(str);
            }
        }
    }

    return (
        <div className='app-header'>
            <div className="app-header-wrapper">
                <div className="app-logo">
                    <a href="/" className='logo'>Weather</a>
                </div>
                <div className="app-search">
                    <input
                        type="text"
                        className='search-bar'
                        placeholder='Search by City name, IP address, Latitude/Longitude etc'
                        onKeyUp={handleKeyUp}
                    />
                </div>
            </div>
        </div>
    );
}

export default connectToStore(Header, () => ({}), { queryChange });