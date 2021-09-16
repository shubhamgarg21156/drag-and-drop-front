import React, { Component } from "react";

class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alphabet: "",
      value: "",
    };
  }

  onchange = (val, prop) => {
    this.setState({
      [prop]: val,
    });
  };
  addtodb = () => {
    fetch(
      `https://drop-and-drag.herokuapp.com/add/?alphabet=${this.state.alphabet}&integer=${this.state.value}`
    ).then((data) => {
      if (data) {
        alert("added");
      }
    });
  };
  render() {
    return (
      <div className="add-container">
        <div className="add-container-div-1">
          <div>
            <span>Alphabet</span>
            <input
              placeholder="Alphabet"
              onChange={(e) => {
                this.onchange(e.target.value, "alphabet");
              }}
            ></input>
          </div>
          <div>
            <span>Value</span>
            <input
              placeholder="value"
              onChange={(e) => {
                this.onchange(e.target.value, "value");
              }}
            ></input>
          </div>
        </div>
        <div className="add-container-div-2">
          <button onClick={this.addtodb}>Add to Database</button>
        </div>
      </div>
    );
  }
}

export default Add;
