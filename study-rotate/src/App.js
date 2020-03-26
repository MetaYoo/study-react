import React from "react";
import "./App.css";
import Header from "./Header";
import Clock from "./Clock";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isShowHeader: true
    };
  }
  componentWillMount() {
    console.log("componentWillMount()");
  }
  componentDidMount() {
    console.log("componentDidMount()");
  }
  handleShowOrHide() {
    this.setState({
      isShowHeader: !this.state.isShowHeader
    });
  }
  render() {
    console.log("render()");
    return (
      <div>
        {this.state.isShowHeader ? <Header /> : null}
        <button onClick={this.handleShowOrHide.bind(this)}>
          显示或者隐藏标题
        </button>
        <Clock/>
      </div>
    );
  }
}

export default App;
