import React from "react";
import './App.css';
const el = React.createElement;
class App extends React.Component {

  state = {
    input1: 0,
    input2: 0,
    result: 0
  }

  updateNumber = (event) => {
    this.setState({ [event.target.name]: Number(event.target.value) });
  }
  addNumber = () => {
    let res = this.state.input1 + this.state.input2;
    this.setState({ result: res });
  }
  calculate = (operator) => {
    if (operator === '+') {
      let res = this.state.input1 + this.state.input2;
      this.setState({ result: res });
    }
    else if (operator === '-') {
      let res = this.state.input1 - this.state.input2;
      this.setState({ result: res });
    }
    else if (operator === '*') {
      let res = this.state.input1 * this.state.input2;
      this.setState({ result: res });
    }
    else if (operator === '/') {
      let res = this.state.input1 / this.state.input2;
      this.setState({ result: res });
    }
  }

  render() {
    return el('div', { name: "Calculator" },
      el('P', null, this.state.result),
      el('input', { name: "input1", placeholder: "value 1", onChange: this.updateNumber }, null),
      el('input', { name: "input2", placeholder: "value 2", onChange: this.updateNumber }, null),
      el('button', {
        name: "add", value: "Add", onClick: function (e) {
          this.calculate('+')
        }.bind(this)
      }, "+"),
      el('button', {
        name: "subtract", value: "Subtract", onClick: function (e) {
          this.calculate('-')
        }.bind(this)
      }, "-"),
      el('button', {
        name: "Multiply", value: "Multiply", onClick: function (e) {
          this.calculate('*')
        }.bind(this)
      }, "*"),
      el('button', {
        name: "Divide", value: "Divide", onClick: function (e) {
          this.calculate('/')
        }.bind(this)
      }, "/"))
  
  }
}
export default App;