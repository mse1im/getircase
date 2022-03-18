import React from "react";
import { useSelector } from "react-redux";

export default function Main() {
  const { data } = useSelector((data) => data);
  console.log(data);
  return (
    <main>
      <div className="gr">
        <div className="gr-2 welcome">
          <h2>Hello, Mehmet Selim!</h2>
          <div className="filter">a</div>
        </div>
        <div className="gr-2 task-bar">
          <div className="box completed">
            <div className="icon">1</div>
            <div className="score">
              <span>2</span>
              <span className="txt">completed task</span>
            </div>
          </div>
          <div className="box incompleted">
            <div className="icon">1</div>
            <div className="score">
              <span>2</span>
              <span className="txt">incompleted task</span>
            </div>
          </div>
        </div>
        <div className="all-task">
          <div className="wrap-task">
            <h3 className="completed">All Tasks</h3>
            <div className="add-task">add</div>
          </div>
          <div className="box incompleted">
            <div className="info">
              <span>task</span>
              <div className="status">
                <span>incompleted</span>
              </div>
            </div>
            <div className="edit">
              <span>editle</span>
            </div>
          </div>
          <div className="box completed">
            <div className="info">
              <span>task</span>
              <div className="status">
                <span>completed</span>
              </div>
            </div>
            <div className="edit">
              <span>editle</span>
            </div>
          </div>
        </div>
        <div className="create-task">
          <div className="return">
            Return to list
          </div>
          <h2>Add New Task</h2>
          <div className="form-group">
            <div className="new-task">1</div>
            <div className="set-status">choose status</div>
            <button>add</button>
          </div>
        </div>
        <div className="update-task">
          <div className="return">
            Return to list
          </div>
          <h2>Update The Task : gubanım</h2>
          <div className="form-group">
            <div className="new-task">1</div>
            <div className="set-status">choose status</div>
            <div className="add-input-field">yeni alan ekle</div>
            <button>update</button>
          </div>
        </div>
      </div>
    </main>
  );
}
