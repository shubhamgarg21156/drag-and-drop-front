import React, { Component } from "react";
import Add from "./Add";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      integer: "",
      operator: "",
      alphabet: "",
      ans: [],
    };
  }

  onDrop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");

    const card = document.getElementById(card_id);
    card.style.display = "block";

    console.log(e.target);
    e.target.appendChild(card);

    if (card.className) {
      this.setState({
        [card.className]: card.innerHTML,
      });
    }
  };

  // onDropOnCard = (e) => {
  //   e.preventDefault();
  //   const card_id = e.dataTransfer.getData("card_id");

  //   const card = document.getElementById(card_id);
  //   card.style.display = "block";

  //   const cls = e.target.parentNode.className;
  //   if (cls == "lower-div") {
  //     document.getElementsByClassName("lower-div")[0].appendChild(card);
  //   }
  //   console.log(card);
  //   // e.target.parentNode.appendChild(card);

  //   if (card.className) {
  //     this.setState({
  //       [card.className]: card.innerHTML,
  //     });
  //   }
  // };

  onDoubleClick = (e) => {
    e.target.disabled = false;
  };
  startSearch = () => {
    fetch(
      `https://drop-and-drag.herokuapp.com/find/?integer=${
        this.state.integer
      }&alphabet=${
        this.state.alphabet
      }&operator=${this.state.operator.substring(1, 3)}`
    ).then((data) => {
      console.log(data);
      // this.setState({
      //   ans: data.data,
      // });
      // for (let i = 0; i < data.data.length; i++) {
      //   console.log(data.data[i].alphabet, data.data[i].value);
      // }
    });
  };

  onIntegerChange = (e) => {
    this.setState({
      integer: e.target.value,
    });
  };
  dragOver = (e) => {
    e.preventDefault();
  };

  dragStart = (e) => {
    const target = e.target;

    e.dataTransfer.setData("card_id", target.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  onDragOver = (e) => {
    e.stopPropagation();
  };
  render() {
    const { ans } = this.state;
    return (
      <div className="App">
        <Add />
        <div className="search-box" onClick={this.startSearch}>
          START SEARCH
        </div>
        <div
          className="upper-div"
          onDragOver={this.dragOver}
          onDrop={this.onDrop}
        >
          <div
            id="card-1"
            className="alphabet"
            draggable={true}
            onDragStart={this.dragStart}
            onDragOver={this.onDragOver}
          >
            A
          </div>
          <div
            id="card-2"
            className="alphabet"
            draggable={true}
            onDragStart={this.dragStart}
            onDragOver={this.onDragOver}
          >
            B
          </div>
          <div
            id="card-3"
            className="alphabet"
            draggable={true}
            onDragStart={this.dragStart}
            onDragOver={this.onDragOver}
          >
            C
          </div>
          <div
            id="card-4"
            className="alphabet"
            draggable={true}
            onDragStart={this.dragStart}
            onDragOver={this.onDragOver}
          >
            D
          </div>
          <div
            id="card-5"
            className="alphabet"
            draggable={true}
            onDragStart={this.dragStart}
            onDragOver={this.onDragOver}
          >
            E
          </div>
          <div
            id="card-6"
            className="alphabet"
            draggable={true}
            onDragStart={this.dragStart}
            onDragOver={this.onDragOver}
          >
            F
          </div>
          <div
            id="card-7"
            className="operator"
            draggable={true}
            onDragStart={this.dragStart}
            onDragOver={this.onDragOver}
          >
            &lt;
          </div>
          <div
            id="card-8"
            className="operator"
            draggable={true}
            onDragStart={this.dragStart}
            onDragOver={this.onDragOver}
          >
            &gt;
          </div>
          <div
            id="card-9"
            className="operator"
            draggable={true}
            onDragStart={this.dragStart}
            onDragOver={this.onDragOver}
          >
            =
          </div>
          <div
            id="integer"
            draggable={true}
            onChange={this.onIntegerChange}
            onDragStart={this.dragStart}
            onDragOver={this.onDragOver}
          >
            <input placeholder="ADD INTEGER"></input>
          </div>
        </div>

        <div
          className="lower-div"
          onDragOver={this.dragOver}
          onDrop={this.onDrop}
        ></div>

        <div className="answer">
          <div>Results</div>
          <ul>
            {ans.map((answer) => {
              return (
                <li>
                  <span>{answer.alphabet}</span>
                  <span>{answer.value}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
