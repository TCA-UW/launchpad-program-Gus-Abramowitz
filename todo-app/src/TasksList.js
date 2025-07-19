import React from 'react';

function TasksList({ tasks, toggleTask, deleteTask }) {
  return (
    <div className="taskList">
       {tasks.length === 0 && (
              <div className='no-tasks-left'> No tasks yet! Add a new one!
              </div>
            )}
            
        {tasks.map((task) => (
           <div key={task.id} className='task-line'>
            <input type="checkbox" checked={task.completed} 
            onChange={() => (toggleTask(task.id))}
            />
            <span className={`task-text ${task.completed ? 'completed' : ''}`}>
            {task.text}</span>
            <button onClick={() => deleteTask(task.id)} className='delete-button'>Delete</button>
           </div>
        ))}
    </div>
  );
}

export default TasksList;