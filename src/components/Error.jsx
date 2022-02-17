import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Error = ({
    message
}) => {
    return (
        <div className="error">
            <span className="error-message">{message}</span>
        </div>
    );
}

Error.propTypes = {
    message: PropTypes.string
}

export default memo(Error);