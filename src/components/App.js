import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileCard from './ProfileCard'



class App extends Component {
  constructor(props) {
    super(props);
    this.people = [
      {
        name: "John Doe",
        role: "Senior Product Manager",
        description: "I spent the past 3 years of my career as a senior product manager, working on internal cloud solutions."
      },
      {
        name: "John Doe 2",
        role: "Senior Product Manager",
        description: "I spent the past 3 years of my career as a senior product manager, working on internal cloud solutions."
      }
    ];
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>LinkedIn Hackathon</h3>
        </div>
        <div className="map">
          {this.people.map(p => (<ProfileCard {...p} />))}
        </div>
        
      </div>
    );
  }
}

export default App;
