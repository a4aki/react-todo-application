import { useState } from "react";

const TodoApp = () => {
  const [task, setTask] = useState("");

  const [description, setDescription] = useState("");

  const [listOfTasks, SetListOfTasks] = useState([]);

  const handleTasks = () => {
    SetListOfTasks([
      ...listOfTasks,
      {
        task,
        description,
      },
    ]);
    setTask("");
    setDescription("");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="form-group">
            <input
              placeholder="Enter your task heading"
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
              type="text"
              className="form-control mt-2"
            />
          </div>
          <div className="form-group mt-2 mb-3">
            <input
              className="form-control"
              type="textarea"
              placeholder="enter description of your task"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>

          <button className="btn btn-primary mb-3" onClick={handleTasks}>
            Save
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>Tasks</h1>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {listOfTasks.map((cur, index) => {
          return (
            <div className="col" key={index}>
              <div className="card h-100">
                <h1>{cur.task}</h1>
                <div className="card-body">
                  <p className="card-text">{cur.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoApp;
