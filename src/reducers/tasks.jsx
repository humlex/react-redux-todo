import {ADD_TASK, REMOVE_TASK, COMPLETE_TASK, EDIT_TASK, ESCAPE_EDIT_TASK} from '../constants';
import {load} from 'redux-localstorage-simple';

let TASKS = load({namespace:'todo-list'}).tasks || []

const tasks = (state = TASKS, action) => {
    console.log({action, state})
    switch(action.type){
        case ADD_TASK:
            return[
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    isCompleted: action.isCompleted
                }
            ];
        case REMOVE_TASK:
            return [...state].filter(task => task.id !== action.id);
        case COMPLETE_TASK:
            return [...state].map(task => {
                if(task.id === action.id){
                    task.isCompleted = !task.isCompleted;
                }
                return task;
            });
        case EDIT_TASK:
            return [...state].map(task => {
                if(task.id === action.id && action.text !== ''){
                    task.isChanged = !task.isChanged;
                    task.text = action.text;
                }
                return task;
            });
        case ESCAPE_EDIT_TASK:
            console.log(state)
            return [...state].map(task => {
                if(task.id === action.id){
                    task.isChanged = !task.isChanged;
                }
                console.log(state)
                return task;
            });
        default:
            return state;
    }
}

export default tasks;