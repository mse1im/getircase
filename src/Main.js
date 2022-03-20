import React from "react";
import { useSelector } from "react-redux";

export default function Main() {
  const { data } = useSelector((data) => data);
  const dNone = {
    display: "none",
  };
  console.log(data);
  return (
    <main className="gr">
        <div className="gr-2 welcome">
          <h2>Hello, Mehmet Selim!</h2>
          <div className="filter">a</div>
        </div>
        <div className="gr-2 task-bar">
          <div className="box completed">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-thumb-up"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path>
              </svg>
            </div>
            <div className="score">
              <span>2</span>
              <span className="txt">Completed Tasks</span>
              <span className="a">
                Checkout <span className="arrow"></span>
              </span>
            </div>
          </div>
          <div className="box incompleted">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-thumb-down"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3"></path>
              </svg>
            </div>
            <div className="score">
              <span>2</span>
              <span className="txt">Incompleted Tasks</span>
              <span className="a">
                Checkout <span className="arrow"></span>
              </span>
            </div>
          </div>
        </div>
        <div className="all-task">
          <div className="wrap-task">
            <h3 className="completed">All Tasks</h3>
            <div className="add-task">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-plus"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
          </div>
          <div className="box incompleted">
            <div className="info">
              <div className="status">
                <label htmlFor="check">
                  <input type="checkbox" name="check" id="check" />
                </label>
                <label htmlFor="check">
                  <input type="checkbox" name="check" id="check" />
                </label>
                <label htmlFor="check">
                  <input type="checkbox" name="check" id="check" />
                </label>
              </div>
              <ul>
                <li>task</li>
                <li>task</li>
                <li>task</li>
              </ul>
            </div>
            <div className="edit">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-edit"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"></path>
                  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"></path>
                  <line x1="16" y1="5" x2="19" y2="8"></line>
                </svg>
              </span>
            </div>
            <div className="delete">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-trash"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="4" y1="7" x2="20" y2="7"></line>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
              </svg>
            </div>
          </div>
          <div className="box completed">
            <div className="info">
              <div className="status">
                <label htmlFor="check">
                  <input type="checkbox" name="check" id="check" checked />
                </label>
              </div>
              <ul>
                <li>task</li>
              </ul>
            </div>
            <div className="edit">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-edit"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"></path>
                  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"></path>
                  <line x1="16" y1="5" x2="19" y2="8"></line>
                </svg>
              </span>
            </div>
            <div className="delete">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-trash"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="4" y1="7" x2="20" y2="7"></line>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="create-task">
          <div className="return">
            <span className="arrow"></span> <span>Return to list</span>
          </div>
          <h2>Add New Task</h2>
          <div className="form-group">
            <div className="form-block">
              <input type="text" placeholder="Task goes here" />
              <label htmlFor="status">
                <input type="checkbox" name="status" id="status" />
              </label>
            </div>
            <div className="form-block new-field">
              <div className="add-field">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-plus"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <div className="update-field" style={dNone}>
                <input type="text" placeholder="new field " />
              </div>
            </div>
            <button>Add Task</button>
          </div>
        </div>
        <div className="update-task">
          <div className="return">
            <span className="arrow"></span> <span>Return to list</span>
          </div>
          <h2>Update The Task : gubanım</h2>
          <div className="form-group">
            <div className="form-block">
              <input type="text" placeholder="Task goes here" />
              <label htmlFor="status">
                <input type="checkbox" name="status" id="status" />
              </label>
            </div>
            <div className="form-block new-field">
              <div className="add-field">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-plus"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <div className="update-field">
                <input type="text" placeholder="new field " />
                <label htmlFor="status">
                  <input type="checkbox" name="status" id="status" />
                </label>
              </div>
            </div>
            <button>Update Task</button>
            <span className="or">or</span>
            <button className="delete">Delete Task</button>
          </div>
        </div>
    </main>
  );
}
