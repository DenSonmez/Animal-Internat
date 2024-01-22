
//forklar det role saten spiller i React?
//state er et objekt, der indeholder data, der er relevante for en komponent og som kan ændre sig over tid.
//useState returnerer et array med to elementer – den aktuelle tilstand (state) og en funktion (setState), der bruges til at opdatere tilstanden.


//i vores kode bruger det i blandt i adminAddPage.jsx og Aps.jsx sammen med props

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

// Forældrekomponent
const ParentComponent = () => {
  // Opretter en liste af opgaver
  const [tasks] = useState([
    { id: 1, text: 'Lav lektier' },
    { id: 2, text: 'Gå en tur' },
    { id: 3, text: 'Læs en bog' },
  ]);

  return (
    <div>
      {/* Sender opgaverne som "tasks" prop til TaskList */}
      <TaskList tasks={tasks} />
    </div>
  );
};

export default ParentComponent;