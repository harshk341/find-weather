import { QUERY_CHANGE } from '../constants/ActionTypes'
import { apiCaller } from '../helpers/apiCaller';
import { IP_URL } from '../constants/Urls';

const queryChange = query => ({
    type: QUERY_CHANGE,
    payload: { query }
});

const getQueryFromServer = url => async dispatch => {
    try {
        const { ip: query } = await apiCaller(url);

        dispatch(queryChange(query));
    } catch (err) {
        console.log(err.message);
    }
}

const initQuery = () => dispatch => {
    const hash = window.location.hash ? window.location.hash.slice(1) : '';
    const search = hash.includes('?') ? hash.slice(hash.indexOf('?')) : '';
    if (!search) {
        dispatch(getQueryFromServer(IP_URL, dispatch));
    } else {
        const [key, value] = search.split('=');
        dispatch(queryChange(value));
    }
}

export {
    queryChange,
    initQuery
}