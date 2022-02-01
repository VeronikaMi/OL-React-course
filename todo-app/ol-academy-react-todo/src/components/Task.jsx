import React, { Component } from "react";
import "./Task.css";

export class Task extends Component {
  render(){
    return(
      <div className={"task" + (this.props.task.isDone ? " done" : "")}>
                  <div className="left-text">
                    <input
                      type="checkbox"
                      defaultChecked={this.props.task.isDone}
                      onChange={() => {
                        this.onCheck(this.props.index);
                      }}
                    />
                    <p className="text">{this.props.task.name}</p>
                  </div>

                  <div className="btn-container">
                    <p
                      className="button"
                      onClick={() => {
                        this.onEdit(this.props.index);
                      }}
                    >
                      Edit
                    </p>
                    <p
                      className="button delete"
                      onClick={() => {
                        this.onDeleteTask(this.props.index);
                      }}
                    >
                      Delete
                    </p>
                    <p
                      className="button arrow"
                      onClick={() => {
                        this.moveUp(this.props.index);
                      }}
                    >
                      ↑
                    </p>
                    <p
                      className="button arrow"
                      onClick={() => {
                        this.moveDown(this.props.index);
                      }}
                    >
                      ↓
                    </p>
                  </div>
                </div>
    )
  }
}
