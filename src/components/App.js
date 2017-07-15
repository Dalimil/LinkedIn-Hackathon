import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileCard from './ProfileCard'
import { people } from './people';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: "John Doe",
          role: "Senior Product Manager",
          description: "I spent the past 3 years of my career as a senior product manager, working on internal cloud solutions.",
          coords: { top: "30%", left: "50%" },
          img: people[0]
        },
        {
          name: "John Doe 2",
          role: "Senior Product Manager",
          description: "I spent the past 3 years of my career as a senior product manager, working on internal cloud solutions.",
          coords: { top: "80%", left: "80%" },
          img: people[1]
        }
      ].map((x, i) => {
        x.index = i;
        x.expanded = false;
        x.toggleCard = this.toggleCard.bind(this);
        return x;
      })
    };
  }
  
  toggleCard(ind) {
    console.log(ind);
    const flip = !this.state.people[ind].expanded;
    const newPeople = this.state.people.map(p => {
      p.expanded = false;
      return p;
    });
    newPeople[ind].expanded = flip;
    this.setState({
      people: newPeople
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>LinkedIn Hackathon</h3>
        </div>
        <div className="map card-1">
          {this.state.people.map((p, i) => (<ProfileCard key={i} {...p} />))}
        </div>
        
      </div>
    );
  }
}

export default App;
