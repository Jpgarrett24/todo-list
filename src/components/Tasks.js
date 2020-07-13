import React, { useState, useEffect } from 'react';

const Tasks = (props) => {
    const { value, task, tasks, setTasks } = props;

    const checkbox = (event) => {
        // tasks[value].completed ?
        //     setTasks(tasks.splice(value, tasks.length, { task: task.task, completed: false })) :
        //     setTasks(tasks.splice(value, tasks.length, { task: task.task, completed: true }))
        tasks[value].completed ?
            tasks[value].completed = false :
            tasks[value].completed = true;
        setTasks(tasks);
        console.log(tasks);
    };

    const deleteTask = (event) => {
        setTasks(tasks.filter((task, index) => {
            return (index !== value);
        }))
    }

    return (
        <>
            <span>{task.task}</span> <input type="checkbox" id="completed" onChange={checkbox} checked={task.completed} /> <button onClick={deleteTask}>Delete</button>
        </>
    );
}

export default Tasks;