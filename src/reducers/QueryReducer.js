import { QUERY_CHANGE } from '../constants/ActionTypes';

const Query = (state = {
    query: null
}, { type, payload}) => {
    switch (type) {
        case QUERY_CHANGE:
            return {
                ...state,
                query: payload.query
            };
        default:
            return state;
    };
};
 
export default Query;