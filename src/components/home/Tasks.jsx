import React, { useState } from 'react';
import TasksForm from './TasksForm';


const Tasks = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
      id: null,
      value: ''
    });
  
    const submitUpdate = value => {
      updateTodo(edit.id, value);
      setEdit({
        id: null,
        value: ''
      });
    };
  
    if (edit.id) {
      return <TasksForm edit={edit} onSubmit={submitUpdate} />;
    }
  
    return todos.map((todo, index) => (
      <div
        className={todo.isComplete ? 'tasks-row complete' : 'tasks-row'}
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className='icons'>
          <p
            onClick={() => removeTodo(todo.id)}
            className='delete-button'
          > Delete </p>
          <p
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className='edit-button'> Edit</p>
        </div>
      </div>
    ));
  };
  
  export default Tasks;