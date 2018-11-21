import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Navbar</span>
        {this.props.totalcounter}
      </nav>
    );
  }
}

export default NavBar;
