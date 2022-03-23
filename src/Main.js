import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addNewTodoAction,
  returnToListAction,
  getTodoList,
  updateTodoAction,
  completedToListAction,
  incompletedToListAction,
  addNewTodoDataAction,
  removeTodoDataAction,
  updateTodoDataAction,
} from "./Redux/Actions/TodoAction";

export default function Main() {
  // REACT HOOKS AND LOCAL STATE
  const [value, setValue] = useState("");
  const [fieldValue, setFieldValue] = useState("");
  const [status, setStatus] = useState(false);
  const [openField, setOpenField] = useState(false);
  const [updateValue, setUpdateValue] = useState("");
  const [updateFieldValue, setUpdateFieldValue] = useState("");
  const [updateStatus, setUpdateStatus] = useState(false);
  const [updateOpenField, setUpdateOpenField] = useState(false);
  const [selectedUpdateData, setSelectedUpdateData] = useState("");

  // REDUX STORE AND REDUX HOOKS
  const state = useSelector((data) => data);
  const addNewTodoDispatch = useDispatch();
  const returnToListDispatch = useDispatch();
  const getDispatch = useDispatch();
  const updateTodoDispatch = useDispatch();
  const completedToListDispatch = useDispatch();
  const incompletedToListDispatch = useDispatch();
  const addNewTodoDataDispatch = useDispatch();
  const removeTodoDataDispatch = useDispatch();
  const updateTodoDataDispatch = useDispatch();
  getDispatch(getTodoList());

  const completed =
    state.remnantDatas.length > 0 && state.newTodoData.length === 0
      ? state.remnantDatas.filter((item) => item.completed)
      : state.newTodoData.length > 0 && state.remnantDatas.length === 0
      ? state.newTodoData.filter((item) => item.completed)
      : state.newTodoData.length === 0 && state.remnantDatas.length === 0
      ? state.data.filter((item) => item.completed)
      : state.newTodoData.length > 0 && state.remnantDatas.length > 0
      ? state.newTodoData.filter((item) => item.completed)
      : state.onlyCompleted.status === true && state.remnantDatas.length > 0
      ? state.remnantDatas.filter((item) => item.completed)
      : state.onlyCompleted.state === true && state.newTodoData.length > 0
      ? state.newTodoData.filter((item) => item.completed)
      : null;

  const incompleted =
    state.remnantDatas.length > 0 && state.newTodoData.length === 0
      ? state.remnantDatas.filter((item) => !item.completed)
      : state.newTodoData.length > 0 && state.remnantDatas.length === 0
      ? state.newTodoData.filter((item) => !item.completed)
      : state.newTodoData.length === 0 && state.remnantDatas.length === 0
      ? state.data.filter((item) => !item.completed)
      : state.newTodoData.length > 0 && state.remnantDatas.length > 0
      ? state.newTodoData.filter((item) => !item.completed)
      : state.onlyInCompleted.status === true && state.remnantDatas.length > 0
      ? state.remnantDatas.filter((item) => !item.completed)
      : state.onlyInCompleted.state === true && state.newTodoData.length > 0
      ? state.newTodoData.filter((item) => !item.completed)
      : null;

  const changeTaskName = () => {
    if (state.onlyCompleted.status) {
      return "Completed Tasks";
    } else if (state.onlyInCompleted.status) {
      return "Incompleted Tasks";
    } else {
      return "All Tasks";
    }
  };

  const getCompletedTask = (completed) => {
    completedToListDispatch(
      completedToListAction({ status: true, data: completed })
    );
    incompletedToListDispatch(
      incompletedToListAction({ status: false, data: [] })
    );
  };

  const getInCompletedTask = (incompleted) => {
    incompletedToListDispatch(
      incompletedToListAction({ status: true, data: incompleted })
    );
    completedToListDispatch(completedToListAction({ status: false, data: [] }));
  };

  const showFilterName = () => {
    incompletedToListDispatch(
      incompletedToListAction({ status: false, data: [] })
    );
    completedToListDispatch(completedToListAction({ status: false, data: [] }));
  };

  const addNewTodo = () => {
    if (value.length === 0) {
      alert("Lütfen Eklenecek veriyi giriniz..!");
    } else {
      const data = {
        userId: 10,
        id: state.newTodoData.length,
        title: fieldValue.length > 0 ? [value, fieldValue] : value,
        completed: status,
      };
      addNewTodoDataDispatch(addNewTodoDataAction(data));
      returnToListDispatch(returnToListAction());
      setStatus(false);
    }
  };

  const addTaskButton = () => {
    addNewTodoDispatch(addNewTodoAction());
  };

  const removeValue = (data) => {
    removeTodoDataDispatch(removeTodoDataAction(data));
  };

  const update = (data) => {
    updateTodoDispatch(updateTodoAction(true));
    setSelectedUpdateData(data);
  };

  const updateTaskButton = () => {
    if (selectedUpdateData.length === 0) {
      alert("Lütfen güncellenecek veriyi giriniz..!");
    } else {
      const data = {
        userId: 10,
        id: state.remnantDatas.length + 1,
        title:
          updateFieldValue.length > 0
            ? [updateValue, updateFieldValue]
            : updateValue,
        completed: updateStatus,
      };
      let current = state.data.filter(
        (item) => item.title !== selectedUpdateData.title
      );
      current = [...current, data];
      updateTodoDataDispatch(updateTodoDataAction(current));
      updateTodoDispatch(updateTodoAction(false));
    }
  };

  useEffect(() => {
  },[state.remnantDatas , state.newTodoData])

  return (
    <main className="gr">
      {!state.newTodo && !state.updateTodo && (
        <>
          <div className="gr-2 welcome">
            <h2>Hello, Mehmet Selim!</h2>
            {(state.onlyCompleted.status || state.onlyInCompleted.status) && (
              <div className="return-to-list" onClick={() => showFilterName()}>
                Return To All List
              </div>
            )}
          </div>
          <div className="gr-2 task-bar">
            <div
              className="box completed"
              onClick={() => getCompletedTask(completed)}
            >
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-thumb-up"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path>
                </svg>
              </div>
              <div className="score">
                <span>{completed.length}</span>
                <span className="txt">Completed Tasks</span>
                <span className="a">
                  Checkout <span className="arrow"></span>
                </span>
              </div>
            </div>
            <div
              className="box incompleted"
              onClick={() => getInCompletedTask(incompleted)}
            >
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-thumb-down"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3"></path>
                </svg>
              </div>
              <div className="score">
                <span>{incompleted.length}</span>
                <span className="txt">Incompleted Tasks</span>
                <span className="a">
                  Checkout <span className="arrow"></span>
                </span>
              </div>
            </div>
          </div>
          <div className="all-task">
            <div className="wrap-task">
              <h3 className="completed">{changeTaskName()}</h3>
              <div className="add-task" onClick={() => addTaskButton()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-plus"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
            </div>
            {!state.onlyCompleted.status &&
            !state.onlyInCompleted.status &&
            state.newTodoData.length === 0 &&
            state.remnantDatas.length === 0 ? (
              <>
                {state.data.map((data, index) => (
                  <div
                    className={`box ${
                      !data.completed ? "incompleted" : "completed"
                    }`}
                    key={data.id}
                  >
                    <div className="info">
                      <span>{data.title}</span>
                    </div>
                    <div className="edit" onClick={() => update(data)}>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-edit"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"></path>
                          <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"></path>
                          <line x1="16" y1="5" x2="19" y2="8"></line>
                        </svg>
                      </span>
                    </div>
                    <div className="delete" onClick={() => removeValue(data)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-trash"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <line x1="4" y1="7" x2="20" y2="7"></line>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                      </svg>
                    </div>
                  </div>
                ))}
              </>
            ) : !state.onlyCompleted.status &&
              !state.onlyInCompleted.status &&
              state.newTodoData.length === 0 &&
              state.remnantDatas.length > 0 ? (
              <>
                {state.remnantDatas.map((data, index) => (
                  <div
                    className={`box ${
                      !data.completed ? "incompleted" : "completed"
                    }`}
                    key={data.id}
                  >
                    <div className="info">
                      <span>{data.title}</span>
                    </div>
                    <div
                      className="edit"
                      onClick={() => update(data)}
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-edit"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"></path>
                          <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"></path>
                          <line x1="16" y1="5" x2="19" y2="8"></line>
                        </svg>
                      </span>
                    </div>
                    <div className="delete" onClick={() => removeValue(data)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-trash"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <line x1="4" y1="7" x2="20" y2="7"></line>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                      </svg>
                    </div>
                  </div>
                ))}
              </>
            ) : !state.onlyCompleted.status &&
              !state.onlyInCompleted.status &&
              state.newTodoData.length > 0 &&
              state.remnantDatas.length === 0 ? (
              <>
                {state.newTodoData.map((data, index) => (
                  <div
                    className={`box ${
                      !data.completed ? "incompleted" : "completed"
                    }`}
                    key={data.title}
                  >
                    <div className="info">
                      {Array.isArray(data.title) ? (
                        <>
                          <span>{data.title[0]}</span>
                          <span>{data.title[1]}</span>
                        </>
                      ) : (
                        <span>{data.title}</span>
                      )}
                    </div>
                    <div
                      className="edit"
                      onClick={() => update(data)}
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-edit"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"></path>
                          <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"></path>
                          <line x1="16" y1="5" x2="19" y2="8"></line>
                        </svg>
                      </span>
                    </div>
                    <div className="delete" onClick={() => removeValue(data)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-trash"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <line x1="4" y1="7" x2="20" y2="7"></line>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                      </svg>
                    </div>
                  </div>
                ))}
              </>
            ) : !state.onlyCompleted.status &&
              !state.onlyInCompleted.status &&
              state.newTodoData.length > 0 &&
              state.remnantDatas.length > 0 ? (
              <>
                {state.remnantDatas.map((data, index) => (
                  <div
                    className={`box ${
                      !data.completed ? "incompleted" : "completed"
                    }`}
                    key={data.title}
                  >
                    <div className="info">
                      {Array.isArray(data.title) ? (
                        <>
                          <span>{data.title[0]}</span>
                          <span>{data.title[1]}</span>
                        </>
                      ) : (
                        <span>{data.title}</span>
                      )}
                    </div>
                    <div
                      className="edit"
                      onClick={() => update(data)}
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-edit"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"></path>
                          <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"></path>
                          <line x1="16" y1="5" x2="19" y2="8"></line>
                        </svg>
                      </span>
                    </div>
                    <div className="delete">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-trash"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <line x1="4" y1="7" x2="20" y2="7"></line>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                      </svg>
                    </div>
                  </div>
                ))}
              </>
            ) : state.onlyCompleted.status &&
              !state.onlyInCompleted.status &&
              state.newTodoData.length === 0 &&
              state.remnantDatas.length === 0 ? (
              <>
                {completed.map((data, index) => (
                  <div
                    className={`box ${data.completed && "completed"}`}
                    key={data.id}
                  >
                    <div className="info">
                      {Array.isArray(data.title) ? (
                        <>
                          <span>{data.title[0]}</span>
                          <span>{data.title[1]}</span>
                        </>
                      ) : (
                        <span>{data.title}</span>
                      )}
                    </div>
                    <div
                      className="edit"
                      onClick={() => update(data)}
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-edit"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"></path>
                          <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"></path>
                          <line x1="16" y1="5" x2="19" y2="8"></line>
                        </svg>
                      </span>
                    </div>
                    <div className="delete" onClick={() => removeValue(data)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-trash"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <line x1="4" y1="7" x2="20" y2="7"></line>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                      </svg>
                    </div>
                  </div>
                ))}
              </>
            ) : state.onlyCompleted.status &&
              !state.onlyInCompleted.status &&
              state.newTodoData.length === 0 &&
              state.remnantDatas.length > 0 ? (
              <>
                {completed.map((data, index) => (
                  <div
                    className={`box ${data.completed && "completed"}`}
                    key={data.id}
                  >
                    <div className="info">
                      {Array.isArray(data.title) ? (
                        <>
                          <span>{data.title[0]}</span>
                          <span>{data.title[1]}</span>
                        </>
                      ) : (
                        <span>{data.title}</span>
                      )}
                    </div>
                    <div
                      className="edit"
                      onClick={() => update(data)}
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-edit"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"></path>
                          <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"></path>
                          <line x1="16" y1="5" x2="19" y2="8"></line>
                        </svg>
                      </span>
                    </div>
                    <div className="delete" onClick={() => removeValue(data)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-trash"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <line x1="4" y1="7" x2="20" y2="7"></line>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                      </svg>
                    </div>
                  </div>
                ))}
              </>
            ) : state.onlyCompleted.status &&
              !state.onlyInCompleted.status &&
              state.newTodoData.length > 0 &&
              state.remnantDatas.length === 0 ? (
              <>
                {completed.map((data, index) => (
                  <div
                    className={`box ${data.completed && "completed"}`}
                    key={data.id}
                  >
                    <div className="info">
                      {Array.isArray(data.title) ? (
                        <>
                          <span>{data.title[0]}</span>
                          <span>{data.title[1]}</span>
                        </>
                      ) : (
                        <span>{data.title}</span>
                      )}
                    </div>
                    <div
                      className="edit"
                      onClick={() => update(data)}
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-edit"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"></path>
                          <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"></path>
                          <line x1="16" y1="5" x2="19" y2="8"></line>
                        </svg>
                      </span>
                    </div>
                    <div className="delete" onClick={() => removeValue(data)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-trash"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <line x1="4" y1="7" x2="20" y2="7"></line>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                      </svg>
                    </div>
                  </div>
                ))}
              </>
            ) : state.onlyCompleted.status &&
              !state.onlyInCompleted.status &&
              state.newTodoData.length > 0 &&
              state.remnantDatas.length > 0 ? (
              <>
                {completed.map((data, index) => (
                  <div
                    className={`box ${data.completed && "completed"}`}
                    key={data.id}
                  >
                    <div className="info">
                      {Array.isArray(data.title) ? (
                        <>
                          <span>{data.title[0]}</span>
                          <span>{data.title[1]}</span>
                        </>
                      ) : (
                        <span>{data.title}</span>
                      )}
                    </div>
                    <div
                      className="edit"
                      onClick={() => update(data)}
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-edit"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"></path>
                          <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"></path>
                          <line x1="16" y1="5" x2="19" y2="8"></line>
                        </svg>
                      </span>
                    </div>
                    <div className="delete" onClick={() => removeValue(data)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-trash"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <line x1="4" y1="7" x2="20" y2="7"></line>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                      </svg>
                    </div>
                  </div>
                ))}
              </>
            ) : state.onlyInCompleted.status &&
              !state.onlyCompleted.status &&
              state.newTodoData.length === 0 &&
              state.remnantDatas.length === 0 ? (
              <>
                {incompleted.map((data, index) => (
                  <div
                    className={`box ${!data.completed && "incompleted"}`}
                    key={data.id}
                  >
                    <div className="info">
                      {Array.isArray(data.title) ? (
                        <>
                          <span>{data.title[0]}</span>
                          <span>{data.title[1]}</span>
                        </>
                      ) : (
                        <span>{data.title}</span>
                      )}
                    </div>
                    <div
                      className="edit"
                      onClick={() => update(data)}
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-edit"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"></path>
                          <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"></path>
                          <line x1="16" y1="5" x2="19" y2="8"></line>
                        </svg>
                      </span>
                    </div>
                    <div className="delete" onClick={() => removeValue(data)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-trash"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <line x1="4" y1="7" x2="20" y2="7"></line>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                      </svg>
                    </div>
                  </div>
                ))}
              </>
            ) : state.onlyInCompleted.status &&
              !state.onlyCompleted.status &&
              state.newTodoData.length === 0 &&
              state.remnantDatas.length > 0 ? (
              <>
                {incompleted.map((data, index) => (
                  <div
                    className={`box ${!data.completed && "incompleted"}`}
                    key={data.id}
                  >
                    <div className="info">
                      {Array.isArray(data.title) ? (
                        <>
                          <span>{data.title[0]}</span>
                          <span>{data.title[1]}</span>
                        </>
                      ) : (
                        <span>{data.title}</span>
                      )}
                    </div>
                    <div
                      className="edit"
                      onClick={() => update(data)}
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-edit"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"></path>
                          <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"></path>
                          <line x1="16" y1="5" x2="19" y2="8"></line>
                        </svg>
                      </span>
                    </div>
                    <div className="delete" onClick={() => removeValue(data)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-trash"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <line x1="4" y1="7" x2="20" y2="7"></line>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                      </svg>
                    </div>
                  </div>
                ))}
              </>
            ) : state.onlyInCompleted.status &&
              !state.onlyCompleted.status &&
              state.newTodoData.length > 0 &&
              state.remnantDatas.length === 0 ? (
              <>
                {incompleted.map((data, index) => (
                  <div
                    className={`box ${!data.completed && "incompleted"}`}
                    key={data.id}
                  >
                    <div className="info">
                      {Array.isArray(data.title) ? (
                        <>
                          <span>{data.title[0]}</span>
                          <span>{data.title[1]}</span>
                        </>
                      ) : (
                        <span>{data.title}</span>
                      )}
                    </div>
                    <div
                      className="edit"
                      onClick={() => update(data)}
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-edit"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"></path>
                          <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"></path>
                          <line x1="16" y1="5" x2="19" y2="8"></line>
                        </svg>
                      </span>
                    </div>
                    <div className="delete" onClick={() => removeValue(data)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-trash"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <line x1="4" y1="7" x2="20" y2="7"></line>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                      </svg>
                    </div>
                  </div>
                ))}
              </>
            ) : null}
          </div>
        </>
      )}

      {state.newTodo && (
        <div className="create-task">
          <div
            className="return"
            onClick={() => returnToListDispatch(returnToListAction())}
          >
            <span className="arrow"></span> <span>Return to list</span>
          </div>
          <h2>Add New Task</h2>
          <div className="form-group">
            <div className="form-block">
              <input
                type="text"
                placeholder="Task goes here"
                onChange={(e) => setValue(e.target.value)}
              />
              <label htmlFor="status">
                <input
                  type="checkbox"
                  name="status"
                  id="status"
                  onChange={(e) => setStatus(e.target.checked)}
                />
              </label>
            </div>
            <div className="form-block new-field">
              <div
                className="add-field"
                onClick={() => setOpenField(!openField)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-plus"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              {openField && (
                <div className="update-field">
                  <input
                    type="text"
                    placeholder="new field"
                    onChange={(e) => setFieldValue(e.target.value)}
                  />
                </div>
              )}
            </div>
            <button onClick={() => addNewTodo()}>Add Task</button>
          </div>
        </div>
      )}
      {state.updateTodo && (
        <div className="update-task">
          <div
            className="return"
            onClick={() => updateTodoDispatch(updateTodoAction(false))}
          >
            <span className="arrow"></span> <span>Return to list</span>
          </div>
          <h2>Update The Task : '{selectedUpdateData.title}'</h2>
          <div className="form-group">
            <div className="form-block">
              <input
                type="text"
                defaultValue={selectedUpdateData.title}
                onChange={(e) => setUpdateValue(e.target.value)}
              />
              <label htmlFor="status">
                <input
                  type="checkbox"
                  name="status"
                  id="status"
                  defaultChecked={selectedUpdateData.completed}
                  onChange={(e) => setUpdateStatus(e.target.checked)}
                />
              </label>
            </div>
            <div className="form-block new-field">
              <div
                className="add-field"
                onClick={() => setUpdateOpenField(!updateOpenField)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-plus"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              {updateOpenField && (
                <div className="update-field">
                  <input
                    type="text"
                    placeholder="new field"
                    onChange={(e) => setUpdateFieldValue(e.target.value)}
                  />
                </div>
              )}
            </div>
            <button onClick={updateTaskButton}>Update Task</button>
          </div>
        </div>
      )}
    </main>
  );
}
