import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  componentDidMount() {
    console.log(" componentDidMount...");
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }
  //   componentWillMount() {
  //     console.log("componentWillMount...");
  //   }
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>Test Componet</h1>
        <br />
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
