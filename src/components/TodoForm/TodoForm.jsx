import React, { Component } from 'react';
import './TodoForm.css';

import {connect} from 'react-redux';
import {addTask, removeTask, completeTask, changeFilter, editTask, escapeEditTask} from '../../actions/ActionCreator';
import {MdAddCircle} from 'react-icons/md';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import Footer from '../Footer/Footer';


class TodoForm extends Component {
    state = {
        taskText: ''
    }

    handleInputChange = (event) => {
        this.setState({
            taskText: event.target.value
        })
    }

    addTask = (event) => {
        event.preventDefault();
        const {taskText} = this.state;        
        const {addTask} = this.props;
        if(taskText !== ''){
            addTask((new Date()).getTime(), taskText, false);
        }          
        this.setState({
            taskText: ''
        }) 
    }

    filterTasks = (tasks, activeFilter) => {
        switch(activeFilter){
            case 'completed':
                return tasks.filter(task => task.isCompleted);
            case 'active':
                return tasks.filter(task => !task.isCompleted);
            default: 
                return tasks;
        }
    }

    getActiveTasksCounter = tasks => tasks.filter(task => !task.isCompleted).length;

    render() {
        const {taskText} = this.state;
        const {tasks, removeTask, completeTask, changeFilter, editTask, filters, escapeEditTask} = this.props;
        const isTasksExit = tasks && tasks.length > 0;
        const filteredTasks = this.filterTasks(tasks, filters);
        const taskCounter = this.getActiveTasksCounter(tasks);
        return (
            <div className='container'>
                <div className="container__inner">
                <h1 className="caption">WHAT SHOULD I DO?</h1>
                    <div className="todo-form">                        
                        <form onSubmit={this.addTask}>
                        <TodoInput onChange={this.handleInputChange} value={taskText}/> <MdAddCircle className ="submit__button" color="df2359" size="10%" onClick={this.addTask}/> 
                        </form>
                        {isTasksExit && <TodoList escapeEditTask={escapeEditTask} editTask={editTask} completeTask={completeTask} tasksList={filteredTasks} removeTask={removeTask}/>}
                       
                    </div>    
                    {isTasksExit && <Footer changeFilter={changeFilter} activeFilter={filters} amount={taskCounter}/>}                 
                </div>
            </div>
        )
    }
}

export default connect(state => ({
    tasks: state.tasks,
    filters: state.filters
}), {addTask, removeTask, completeTask, changeFilter, editTask, escapeEditTask})(TodoForm);