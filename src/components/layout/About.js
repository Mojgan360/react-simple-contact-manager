import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <h1>{this.props.match.params.id}</h1>
        <h2>hello</h2>
      </div>
    );
  }
}
