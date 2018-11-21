import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 }
    ],
    original: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 }
    ]
  };

  handleDelete = id => {
    //console.log("this is handleDelete button press for id.", id);
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters: counters });
  };

  handleReset = () => {
    //console.log("this is handleReset button press.");
    const counters = this.state.original.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    //console.log("this is handleIncrement button press.", counter);
    const counters = [...this.state.counters];

    const index = this.state.counters.indexOf(counter);
    counters[index] = counter;
    counters[index].value++;
    this.setState({ counters });
    //console.log("this is handleIncrement button press.", counter);
  };

  handleDecrement = counter => {
    //console.log("this is handleDecrement button press.", counter);
    const counters = [...this.state.counters];

    const index = this.state.counters.indexOf(counter);
    counters[index] = counter;
    if (counters[index].value > 0) counters[index].value--;

    this.setState({ counters });
    //console.log("this is handleDecrement button press.", counter);
  };

  totalcounters() {
    var len = 0;
    this.state.counters.forEach(element => {
      len += element.value;
    });
    return len;
  }

  render() {
    return (
      <React.Fragment>
        <NavBar totalcounter={this.totalcounters()} /> <p />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
