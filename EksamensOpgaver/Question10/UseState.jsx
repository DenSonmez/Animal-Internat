// Hooks er en funktionalitet i React,der giver mulighed for at bruge tilstand og andre React-funktioner i funktionelle komponenter.
// Før introduktionen af Hooks var det nødvendigt at bruge klassekomponenter
// Med Hooks kan du nu gøre dette i funktionelle komponenter, hvilket gør din kode mere enkel og genbrugelig.

// useState hjælper med at holde styr på tilstanden af en komponent.

import React, { useState } from "react";

// Barnkomponent
const TaskList = (props) => {
  const [completedTasks, setCompletedTasks] = useState([]);

  const markAsCompleted = (taskId) => {
    setCompletedTasks([...completedTasks, taskId]);
  };

  return (
    <div>
      <h2>Opgaveliste</h2>
      <ul>
        {/*  generere listeelementer */}
        {props.tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => markAsCompleted(task.id)}>
              Markér som fuldført
            </button>
          </li>
        ))}
      </ul>
      <p>Fuldførte opgaver: {completedTasks.join(", ")}</p>
    </div>
  );
};

// Forældrekomponent
const ParentComponent = () => {
  // Opretter en liste af opgaver
  const [tasks] = useState([
    { id: 1, text: "Lav lektier" },
    { id: 2, text: "Gå en tur" },
    { id: 3, text: "Læs en bog" },
  ]);

  return (
    <div>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default ParentComponent;
