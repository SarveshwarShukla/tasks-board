import React, { useState, useEffect, useRef } from "react";

const TasksForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <div className="tasks-container">
      <form onSubmit={handleSubmit} className="todo-form">
        {props.edit ? (
          <>
            <input
              placeholder="Update your item"
              value={input}
              onChange={handleChange}
              name="text"
              ref={inputRef}
              className="tasks-input edit"
            />
            <button onClick={handleSubmit} className="tasks-button edit">
              Update
            </button>
          </>
        ) : (
          <>
            <input
              placeholder="Add a Task"
              value={input}
              onChange={handleChange}
              name="text"
              className="tasks-input"
              ref={inputRef}
            />
            <button onClick={handleSubmit} className="tasks-button">
              Add Task
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default TasksForm;
