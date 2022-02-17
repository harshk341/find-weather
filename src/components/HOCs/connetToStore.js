import { connect } from "react-redux";

const connectToStore = (
    Component,
    callback,
    dispatchers
) => {

    const mapStateToProps = callback;

    return connect(mapStateToProps, {
        ...dispatchers
    })(Component);
}

export default connectToStore;