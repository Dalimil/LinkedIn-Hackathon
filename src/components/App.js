import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileCard from './ProfileCard'
import { people } from './people';
import floorplan from './floor-plan/floor-plan.png';
import Recommendation from './Recommendation'

class App extends Component {
  constructor(props) {
    super(props);
    this.lastPopupFix = Date.now();
    this.state = {
      people: [
        {
          name: "John Doe",
          role: "Senior Product Manager",
          description: "I spent the past 3 years of my career as a senior product manager, working on internal cloud solutions.",
          coords: { top: 57, left: 47 },
          img: people[0],
          pulseColor: "green"
        },
        {
          name: "John Doe 2",
          role: "Senior Product Manager",
          description: "I spent the past 3 years of my career as a senior product manager, working on internal cloud solutions.",
          coords: { top: 75, left: 83 },
          img: people[1],
          pulseColor: "amber"
        },
        {
          name: "John Doe 3",
          role: "Senior Product Manager",
          description: "I spent the past 3 years of my career as a senior product manager, working on internal cloud solutions.",
          coords: { top: 85, left: 10 },
          img: people[2],
          pulseColor: "red"
        },
        {
          name: "John Doe 4",
          role: "Senior Product Manager",
          description: "I spent the past 3 years of my career as a senior product manager, working on internal cloud solutions.",
          coords: { top: 50, left: 80 },
          img: people[3],
          pulseColor: "green"
        },
        {
          name: "John Doe 5",
          role: "Senior Product Manager",
          description: "I spent the past 3 years of my career as a senior product manager, working on internal cloud solutions.",
          coords: { top: 70, left: 55 },
          img: people[4],
          pulseColor: "amber"
        },
        {
          name: "John Doe 6",
          role: "Senior Product Manager",
          description: "I spent the past 3 years of my career as a senior product manager, working on internal cloud solutions.",
          coords: { top: 50, left: 20 },
          img: people[5],
          pulseColor: "red"
        }
      ].map((x, i) => {
        x.index = i;
        x.expanded = false;
        x.toggleCard = this.toggleCard.bind(this);
        x.coords.topFixed = x.coords.top;
        return x;
      })
    };
  }

  toggleCard(ind) {
    if (this.lastPopupFix + 1000 > Date.now()) {
      // fix double click
      return;
    }
    this.lastPopupFix = Date.now();
    console.log(ind);
    const flip = (ind != null) ? (!this.state.people[ind].expanded) : null;
    const newPeople = this.state.people.map(p => {
      p.expanded = false;
      return p;
    });
    if (ind != null) {
      newPeople[ind].expanded = flip;
    }
    this.setState({
      people: newPeople
    });
  }

  fixIconHeightOffset() {
    const ratio = this.mapImg.clientHeight / this.appEl.clientHeight;
    const newPeople = this.state.people.map(p => {
      p.coords.topFixed = Math.round(p.coords.top * ratio);
      return p;
    });
    this.setState({
      people: newPeople
    });
  }

  componentDidMount() {
    this.fixIconHeightOffset();
    window.onresize = this.fixIconHeightOffset.bind(this);
  }

  openNav() {
     return (document.getElementById("mySidenav").style.width = "250px");
  }



  render() {
    return (
      <div className="App" ref={(appEl) => this.appEl = appEl}>
        <div className="App-header">
          <img className="App-logo" src={logo} style={{display: "inline" }} />
          <h4 style={{ display: "inline" }}>LinkedIn Hackathon</h4>
          <span style={{float: "right"}} onClick={() => this.openNav()}>Meet New People</span>

        </div>
        <div className="map" onClick={() => this.toggleCard(null)}>
          <img className="card-1" src={floorplan} ref={(im) => this.mapImg = im}
              style={{ position: 'absolute', top: 0, left: 0, width: "100%"}} />
          {this.state.people.map((p, i) => (<ProfileCard key={i} {...p} />))}
        </div>
        <Recommendation/>






      </div>
    );
  }


}

export default App;
