
// lifting state up betyder  at flytte tilstanden (state) fra en komponent til en fælles overordnet komponent. 
//Dette gøres for at dele tilstand mellem komponenter, der har brug for adgang til den samme data.





//Show how you would lift state up in a React application.



const TaskList = ({ tasks, removeTask }) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;




const TaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask('');
  };
  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TaskForm;




// App.jsx (Parent component)
import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <TaskList tasks={tasks} removeTask={removeTask} />
      <TaskForm addTask={addTask} />
    </div>
  );
};

export default App;
