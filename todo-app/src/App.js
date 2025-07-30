import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

import './App.css';
import AddTaskForm from './AddTaskForm';
import TasksList from './TasksList';
import FilterButtons from './filterButtons';

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);

function App() {
  const [ tasks, changeTask ] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

useEffect(() => {
    async function fetchTasks() {
      const { data, error } = await supabase.from('tasks').select('*');
      if (error) {
        console.error('Error fetching tasks:', error.message);
      } else {
        changeTask(data);
      }
      setLoading(false);
    }

    fetchTasks();
  }, []);

const AddTask = (Task) => {
  changeTask([...tasks, Task]);
};

const toggleTask = (taskId) => {
  changeTask(tasks.map(task => 
    task.id === taskId 
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  const deleteTask = (taskID) => {
    const updatedTasks = tasks.filter(task => task.id !== taskID);
    changeTask(updatedTasks);
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return true;
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true;
  });

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length
  const remainingTasks = totalTasks - completedTasks;

  const clearCompletedTasks = () => {
  const activeTasks = tasks.filter(task => !task.completed);
  changeTask(activeTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Gus' To-Do List</h1>
      </header>
      <div className='todo-container'>
      <AddTaskForm onAddTask={AddTask} />

      <FilterButtons filter={filter} setFilter={setFilter}/>
      
      {tasks.some(task => task.completed) && (
        <button className="clear-completed" onClick={clearCompletedTasks}>
          Clear Completed
          </button>
        )}

      <div className='tasks-stats'>
        Total: {totalTasks} | Completed: {completedTasks} | Remaining: {remainingTasks}
      </div>

      <TasksList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask}/>
      </div>
    </div>
  );
}

export default App;