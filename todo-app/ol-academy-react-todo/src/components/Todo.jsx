import React, { Component } from "react";
import "./Todo.css";

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      error: "",
      currValue: "",
      editMode: false,
      currIndex: null,
      editValue: "",
      editError: "",
    };
  }

  onChangeHandle = (e) => {
    this.setState({ currValue: e.target.value });
  };

  isValueValid = (value) => {
    if (value === "") {
      this.state.editMode
        ? this.setState({ editError: "Please enter in a task" })
        : this.setState({ error: "Please enter in a task" });

      return false;
    } else if (
      !this.state.editMode &&
      this.state.tasks.length !== 0 &&
      this.state.tasks.some((el) => el.name === value)
    ) {
        this.setState({ error: "The task already exists" });

      return false;
    }

    return true;
  };

  onClickHandle = () => {
    if (this.isValueValid(this.state.currValue)) {
      console.log(this.state.currValue);
      this.setState({
        tasks: [
          ...this.state.tasks,
          { name: this.state.currValue, isDone: false },
        ],
        currValue: "",
        error: "",
      });
    }
  };

  onDeleteAll = () => {
    this.setState({
      tasks: [],
    });
  };

  onDeleteDone = () => {
    this.setState({
      tasks: this.state.tasks.filter((el) => el.isDone === false),
    });
  };

  onDeleteNotDone = () => {
    this.setState({
      tasks: this.state.tasks.filter((el) => el.isDone === true),
    });
  };

  onDeleteTask = (index) => {
    this.setState({
      tasks: this.state.tasks.filter((el, i) => i !== index),
    });
  };

  onCheck = (index) => {
    let newTasks = this.state.tasks;
    newTasks[index].isDone = !this.state.tasks[index].isDone;
    this.setState({
      tasks: newTasks,
    });

    // [
    //   ...newTasks.filter((el) => el.isDone === false),
    //   ...newTasks.filter((el) => el.isDone === true),
    // ]
  };

  moveDown = (index) => {
    let swapIndex = index + 1;
    if (swapIndex === this.state.tasks.length) {
      swapIndex = 0;
    }
    this.move(index, swapIndex);
  };

  moveUp = (index) => {
    let swapIndex = index - 1;
    if (index === 0) {
      swapIndex = this.state.tasks.length - 1;
    }
    this.move(index, swapIndex);
  };

  move = (index, swapIndex) => {
    let temp = this.state.tasks[index];
    let tempTasks = this.state.tasks;
    tempTasks[index] = tempTasks[swapIndex];
    tempTasks[swapIndex] = temp;

    this.setState({
      tasks: tempTasks,
    });
  };

  onEdit = (index) => {
    this.setState({
      editMode: true,
      currIndex: index,
      editValue: this.state.tasks[index].name,
    });
  };

  onEditHandle = (e) => {
    this.setState({
      editValue: e.target.value,
    });
  };

  onEditClick = () => {
    if (this.isValueValid(this.state.editValue)) {
      let newTasks = this.state.tasks;
      newTasks[this.state.currIndex].name = this.state.editValue;
      this.setState({
        editMode: false,
        currIndex: null,
        editValue: "",
        tasks: newTasks,
        editError:""
      });
    }
  };

  render() {
    console.log(this.state.tasks);
    return (
      <div className="container">
        <div className="input">
          <input
            type="text"
            placeholder="Enter your task here..."
            value={this.state.currValue}
            onChange={this.onChangeHandle}
          />
          <button onClick={this.onClickHandle}>Add</button>
        </div>
        <div className="error">
          <p className="error-text"> {this.state.error} </p>
        </div>
        <div className="additianal-btns">
          <button className="btn-2" onClick={this.onDeleteAll}>
            Delete All
          </button>
          <button className="btn-2" onClick={this.onDeleteDone}>
            Delete Done
          </button>
          <button className="btn-2" onClick={this.onDeleteNotDone}>
            Delete Not Done
          </button>
        </div>
        <div className="tasks-container">
          {this.state.editMode === true && (
            <div className="black">
              <div className="overlay">
                <input
                  type="text"
                  value={this.state.editValue}
                  onChange={this.onEditHandle}
                />
                <div className="error">
                  <p className="error-text"> {this.state.editError} </p>
                </div>
                <button onClick={this.onEditClick}>Edit</button>
                <button
                  className="btn-2"
                  onClick={() => {
                    this.setState({ editMode: false, editError:"" });
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <ul>
            {this.state.tasks.map((task, index) => (
              <li key={"task" + index}>
                <div className={"task" + (task.isDone ? " done" : "")}>
                  <div className="left-text">
                    <input
                      type="checkbox"
                      defaultChecked={task.isDone}
                      onChange={() => {
                        this.onCheck(index);
                      }}
                    />
                    <p className="text">{task.name}</p>
                  </div>

                  <div className="btn-container">
                    <p
                      className="button"
                      onClick={() => {
                        this.onEdit(index);
                      }}
                    >
                      Edit
                    </p>
                    <p
                      className="button delete"
                      onClick={() => {
                        this.onDeleteTask(index);
                      }}
                    >
                      Delete
                    </p>
                    <p
                      className="button arrow"
                      onClick={() => {
                        this.moveUp(index);
                      }}
                    >
                      ↑
                    </p>
                    <p
                      className="button arrow"
                      onClick={() => {
                        this.moveDown(index);
                      }}
                    >
                      ↓
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
