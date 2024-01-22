

// Beskriv formålet med props i React.?
// props er en måde at sende data fra en komponent til en anden komponent. 
// Formålet med props er give komponenter mulighed for modtage og bruge data fra en anden komponent,.

// i vores kode bruger det i blandt i adminAddPage.jsx og Aps.jsx sammen med state


import React, { useState } from 'react';


const TaskList = (props) => {
  const [completedTasks, setCompletedTasks] = useState([]);

  const markAsCompleted = (taskId) => {
    setCompletedTasks([...completedTasks, taskId]);
  };

  return (
    <div>
      <h2>Opgaveliste</h2>
      <ul>
        {/* Bruger opgaverne fra props til at generere listeelementer */}
        {props.tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => markAsCompleted(task.id)}>
              Markér som fuldført
            </button>
          </li>
        ))}
      </ul>
      <p>Fuldførte opgaver: {completedTasks.join(', ')}</p>
    </div>
  );
};

export default TaskList;


const ParentComponent = () => {
  // Opretter en liste af opgaver
  const [tasks] = useState([
    { id: 1, text: 'Lav lektier' },
    { id: 2, text: 'Gå en tur' },
    { id: 3, text: 'Læs en bog' },
  ]);

  return (
    <div>
        <TaskList tasks={tasks} />
    </div>
  );
};

export default ParentComponent;