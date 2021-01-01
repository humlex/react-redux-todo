import {CHANGE_FILTER} from '../constants';

const BASE_FILTER = 'all';

const filter = (state = BASE_FILTER, action) => {
    switch(action.type){
        case CHANGE_FILTER:
            return action.activeFilter;
        default:
            return state;
    }
}

export default filter;