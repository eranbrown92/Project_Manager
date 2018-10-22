import React from "react";
import ReactDOM from "react-dom";
import Project from "./components/Projects";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  render() {
    return (
      <div>
        <h2>Project Manager</h2>
        <Project />
      </div>
    );
  }

  componentWillMount() {}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
