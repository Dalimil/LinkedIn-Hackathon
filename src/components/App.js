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
    this.state = {
      people: [
        {
          name: "John Doe",
          role: "Senior Product Manager",
          description: "I spent the past 3 years of my career as a senior product manager, working on internal cloud solutions.",
          coords: { top: 30, left: 50 },
          img: people[0]
        },
        {
          name: "John Doe 2",
          role: "Senior Product Manager",
          description: "I spent the past 3 years of my career as a senior product manager, working on internal cloud solutions.",
          coords: { top: 100, left: 80 },
          img: people[1]
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

  render() {
    return (
      <div className="App" ref={(appEl) => this.appEl = appEl}>
        <div className="App-header">
          <img className="App-logo" src={logo} style={{display: "inline" }} />
          <h4 style={{ display: "inline" }}>LinkedIn Hackathon</h4>
        </div>
        <div className="map">
          <img className="card-1" src={floorplan} ref={(im) => this.mapImg = im}
              style={{ position: 'absolute', top: 0, left: 0, width: "100%"}} />
          {this.state.people.map((p, i) => (<ProfileCard key={i} {...p} />))}
        </div>


        <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={() => this.closeNav()}>&times;</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
        </div>

        <span onClick={() => this.openNav()}>open</span>

        <div id="main">
        </div>

    
      </div>
    );
  }

  openNav() {
     return (document.getElementById("mySidenav").style.width = "250px");
  }

 closeNav() {
       return (document.getElementById("mySidenav").style.width = "0");
  }
}

export default App;
