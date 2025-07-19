import React, { useState } from 'react';

function AddTaskForm({onAddTask}) {
const [ task, changeTask ] = useState('');

const onSubmit = (e) => {
  e.preventDefault();
  console.log(task);

if (task.trim()) {
      const Task = {
        id: Date.now(),
        text: task.trim(),
        completed: false
      };

      onAddTask(Task);
      changeTask('');
    }
};

const onChange = (e) => {
  changeTask(e.target.value);
};

  return (
    <div>
      <main>
        <form onSubmit={onSubmit} className='Todo-form'>
          <input className='top-form-line'
          type='text'
          value={task}
          placeholder='Enter New Task...'
          onChange={onChange}
          />
          <button type='submit' className='add-button'> Add Task </button>
        </form>
      </main>
    </div>
  );
}
export default AddTaskForm;