import "./style.css";
import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
      BackgroundColor: "BLACK"};
  };

render(){
    return (
      <>
      <div className='top'> DEMO ONLINE TEST</div>
    <div className='cont'>
    <img src={require("./question.png")} alt="" />
      </div>
      <div className='id'>
      <img src={require("./photo.png")} alt="" />
    </div>
    <div className='head'> QUESTION PELLETE</div>
    <div className='compo'>

    <button className={this.state.BackgroundColor === "BLACK" ? "w" : "White"}
        onClick={() => {this.setState({BackgroundColor: "WHITE"})}} >1</button>
        <button className={this.state.BackgroundColor === "WHITE" ? "w" : "RE"}
        onClick={() => {this.setState({BackgroundColor: "BLACK"})}}>2</button>
    <button className={this.state.BackgroundColor === "BLACK" ? "y" : "nothing"}
        onClick={() => {this.setState({BackgroundColor: "WHITE"})}} >3</button>
        <button className={this.state.BackgroundColor === "WHITE" ? "y" : "nothing"}
        onClick={() => {this.setState({BackgroundColor: "BLACK"})}}>3</button>
    <button className={this.state.BackgroundColor === "BLACK" ? "gre" : "nothing"}
        onClick={() => {this.setState({BackgroundColor: "WHITE"})}} >4</button>
        <button className={this.state.BackgroundColor === "WHITE" ? "gre" : "nothing"}
        onClick={() => {this.setState({BackgroundColor: "BLACK"})}}>4</button>
    <button className={this.state.BackgroundColor === "BLACK" ? "White" : "nothing"}
        onClick={() => {this.setState({BackgroundColor: "WHITE"})}} >5</button>
        <button className={this.state.BackgroundColor === "WHITE" ? "White" : "nothing"}
        onClick={() => {this.setState({BackgroundColor: "BLACK"})}}>5</button>
    <button className={this.state.BackgroundColor === "BLACK" ? "RE" : "nothing"}
        onClick={() => {this.setState({BackgroundColor: "WHITE"})}} >6</button>
        <button className={this.state.BackgroundColor === "WHITE" ? "RE" : "nothing"}
        onClick={() => {this.setState({BackgroundColor: "BLACK"})}}>6</button>
    <button className={this.state.BackgroundColor === "BLACK" ? "White" : "nothing"}
        onClick={() => {this.setState({BackgroundColor: "WHITE"})}} >7</button>
        <button className={this.state.BackgroundColor === "WHITE" ? "White" : "nothing"}
        onClick={() => {this.setState({BackgroundColor: "BLACK"})}}>7</button>
    <button className={this.state.BackgroundColor === "BLACK" ? "White" : "nothing"}
        onClick={() => {this.setState({BackgroundColor: "WHITE"})}} >8</button>
        <button className={this.state.BackgroundColor === "WHITE" ? "White" : "nothing"}
        onClick={() => {this.setState({BackgroundColor: "BLACK"})}}>8</button>
    <button className={this.state.BackgroundColor === "BLACK" ? "p" : "nothing"}
        onClick={() => {this.setState({BackgroundColor: "WHITE"})}} >9</button>
        <button className={this.state.BackgroundColor === "WHITE" ? "p" : "nothing"}
        onClick={() => {this.setState({BackgroundColor: "BLACK"})}}>9</button>
    <button className={this.state.BackgroundColor === "BLACK" ? "White" : "nothing"}
        onClick={() => {this.setState({BackgroundColor: "WHITE"})}} >10</button>
        <button className={this.state.BackgroundColor === "WHITE" ? "White" : "nothing"}
        onClick={() => {this.setState({BackgroundColor: "BLACK"})}}>10</button>
    </div>
    <div className="rest">
    <img src={require("./rest.png")} alt="" />
    </div>
    <div className='new'>
    <div className="i1">
    <button className={this.state.BackgroundColor === "BLACK" ? "Blue" : "nothing"}
        onClick={() => {this.setState({BackgroundColor: "WHITE"})}}>CLEAR RESPONSE </button>
        <button className={this.state.BackgroundColor === "WHITE" ? "Blue" : "nothing"}
        onClick={() => {this.setState({BackgroundColor: "BLACK"})}}>CLEAR RESPONSE</button>
    </div>
    <div className="i2">
    <button className={this.state.BackgroundColor === "BLACK" ? "Blue" : "nothing"}
        onClick={() => {this.setState({BackgroundColor: "WHITE"})}}>REVIEW </button>
        <button className={this.state.BackgroundColor === "WHITE" ? "Blue" : "nothing"}
        onClick={() => {this.setState({BackgroundColor: "BLACK"})}}>REVIEW</button>
    </div>
    <div className="i3">
    <button className={this.state.BackgroundColor === "BLACK" ? "Blue" : "nothing"}
        onClick={() => {this.setState({BackgroundColor: "WHITE"})}}>DUMP</button>
        <button className={this.state.BackgroundColor === "WHITE" ? "Blue" : "nothing"}
        onClick={() => {this.setState({BackgroundColor: "BLACK"})}}>DUMP</button>
    </div>
    <div className="i4">
    <button className={this.state.BackgroundColor === "BLACK" ? "Blue" : "nothing"}
        onClick={() => {this.setState({BackgroundColor: "WHITE"})}}>PREVIOUS </button>
        <button className={this.state.BackgroundColor === "WHITE" ? "Blue" : "nothing"}
        onClick={() => {this.setState({BackgroundColor: "BLACK"})}}>PREVIOUS</button>
    </div>
    <div className="i5">
    <button className={this.state.BackgroundColor === "BLACK" ? "Blue" : "nothing"}
        onClick={() => {this.setState({BackgroundColor: "WHITE"})}}>NEXT</button>
        <button className={this.state.BackgroundColor === "WHITE" ? "Blue" : "nothing"}
        onClick={() => {this.setState({BackgroundColor: "BLACK"})}}>NEXT</button>
    </div>
    </div>
           
    
      </>
    );
  }
}



export default App
