import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <Form tasks={tasks} setTasks={setTasks}></Form>
      <ul>
        {tasks.map((task, idx) => {
          return (<li><Tasks key={idx} value={idx} task={task} tasks={tasks} setTasks={setTasks}></Tasks></li>);
        })}
      </ul>
    </>
  );
};

export default App;
