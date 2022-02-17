import { QUERY_CHANGE } from '../constants/ActionTypes'
import { ipApiCaller } from '../helpers/apiCaller';

const queryChange = query => ({
    type: QUERY_CHANGE,
    payload: { query }
});

const getQueryFromServer = async (url, callback) => {
    try {
        const { ip: query } = await ipApiCaller(url);

        callback(queryChange(query));
    } catch (err) {
        console.log(err.message);
    }
}

const initQuery = url => dispatch => {
    const hash = window.location.hash ? window.location.hash.slice(1) : '';
    const search = hash.includes('?') ? hash.slice(hash.indexOf('?')) : '';
    if (!search) {
        getQueryFromServer(url, dispatch);
    } else {
        const [key, value] = search.split('=');
        dispatch(queryChange(value));
    }
}

export {
    queryChange,
    initQuery
}