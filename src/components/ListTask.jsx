import React, { useState } from "react";
import '../styles/App.css'

const ListApp = () => {
  const [addTask, setAddTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [editTask, setEditTask] = useState("");
  const [editingTaskElement, setEditingTaskElement] = useState(null);

  const handleAddTask = (e) => {
    setAddTask(e.target.value);
  };

  const AddElementList = () => {
    if (addTask !== "") {
      setTaskList([...taskList, addTask]);
      setAddTask("");
    }
  };

  const handleEditedElement = (e) => {
    setEditTask(e.target.value);
  };

  const editingElement = (index) => {
    setEditingTaskElement(index);
    setEditTask(taskList[index]);
  };

  const savedElement = () => {
    if (editTask !== "") {
      const updatedTasks = [...taskList];
      updatedTasks[editingTaskElement] = editTask;
      setTaskList(updatedTasks);
      setEditingTaskElement(null);
      setEditTask("");
    }
  };

  const deleteTaskElement = (index) => {
    setTaskList(taskList.filter((task, i) => i !== index));
  };

  return (
    <div>
      <div className="add_tasks_section">
        <input
          type="text"
          value={addTask}
          placeholder="add element"
          onChange={handleAddTask}
        />
        <button onClick={AddElementList}>Add</button>
      </div>
      <div className="task_section">
        {taskList.map((task, index) => {
          return (
            <div key={index} className="task">
              {editingTaskElement === index ? (
                <>
                  <input
                    type="text"
                    placeholder="Edit input"
                    value={editTask}
                    onChange={handleEditedElement}
                  />
                  <button onClick={savedElement}>save</button>
                </>
              ) : (
                <>
                  <p>{task}</p>
                  <button onClick={() => editingElement(index)}>Edit</button>
                  <button onClick={() => deleteTaskElement(index)} className="delete">
                    Delete
                  </button>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListApp;
