import { memo } from "react";
import PropTypes from 'prop-types';

const Loading = ({
    loading,
    classname
}) => {
    return (
        <>
            {
                loading &&
                <div className="spin-loader">
                    <div className="spin-loader-wrapper">
                        <div className="spinner">
                            <div className="spinner-border"></div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

Loading.propTypes = {
    loading: PropTypes.bool,
    classname: PropTypes.string
}

Loading.defaultProps = {
    classname: ''
}

export default memo(Loading);