import React, { Component } from "react";

class Counter extends Component {
  buttoncolor() {}
  render() {
    let classes = "badge m2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";

    return (
      <div>
        <span className={classes}>{this.props.counter.value}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn m32 btn-primary"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn m32 btn-primary btn-warning"
        >
          Decrement
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-pill btn-danger"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
