import React, { Component } from "react";
import "./Error.css";

export class Error extends Component {
  render() {
    return (
      <div className="error">
        <p className="error-text"> {this.props.error} </p>
      </div>
    );
  }
}

