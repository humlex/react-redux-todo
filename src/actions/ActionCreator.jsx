import {ADD_TASK, REMOVE_TASK, COMPLETE_TASK, CHANGE_FILTER, EDIT_TASK, ESCAPE_EDIT_TASK} from '../constants';

export const addTask = (id, text, isCompleted) => ({    
        type: ADD_TASK,
        id: id,
        text: text,
        isCompleted: isCompleted    
});

export const removeTask = (id) => ({
        type: REMOVE_TASK,
        id: id
});

export const completeTask = (id) => ({
        type: COMPLETE_TASK,
        id: id
});

export const changeFilter = (activeFilter) => ({
        type: CHANGE_FILTER,
        activeFilter
});

export const editTask = (id, text) => ({
        type: EDIT_TASK,
        id: id,
        text: text
});

export const escapeEditTask = (id) => ({
        type: ESCAPE_EDIT_TASK,
        id: id
});