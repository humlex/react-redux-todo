import {combineReducers} from 'redux';
import tasks from './tasks';
import filters from './filters';

const AllReducers = combineReducers({tasks, filters});

export default AllReducers;