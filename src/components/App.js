import React, { Component } from 'react';
import logo from './floor-logo.png';
import meet from './meet-icon.png';
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
      navOpened: false,
      people: [
        {
          name: "John Smith",
          role: "Senior Product Manager",
          description: "Currently, I am working on rolling out a new cloud product",
          coords: { top: 57, left: 47 },
          img: people[0],
          pulseColor: "green",
          interests: ["Management", "SaaS"]
        },
        {
          name: "Adam Grant",
          role: "Software Developer I",
          description: "I am developing the backend of our cloud payments feature.",
          coords: { top: 75, left: 83 },
          img: people[1],
          pulseColor: "amber",
          interests: ["Python","Payments","Hiking"]

        },
        {
          name: "Michael Wozniski",
          role: "Senior Software Developer",
          description: "I am out on vacation.",
          coords: { top: 85, left: 10 },
          img: people[2],
          pulseColor: "red",
          interests: ["Hiking","Theatre","Software Mgmt"]
        },
        {
          name: "Alicia May",
          role: "Product Manager",
          description: "I am currently managing the software team that is working on the cloud payments feature.",
          coords: { top: 50, left: 80 },
          img: people[3],
          pulseColor: "green",
          interests: ["Reading","Travelling"]
        },
        {
          name: "Gary Martin",
          role: "Software Developer",
          description: "I am working on our new cloud payments feature. I would love to grab a coffee and chat about best places to sky-dive!",
          coords: { top: 70, left: 55 },
          img: people[4],
          pulseColor: "amber",
          interests: ["VC","Parkour","Horses"]
        },
        {
          name: "John Doe",
          role: "Senior Product Manager",
          description: "I spent the past 3 years of my career as a senior product manager, working on internal cloud solutions.",
          coords: { top: 50, left: 20 },
          img: people[5],
          pulseColor: "red",
          interests: ["Marketing", "UX", "Golf"]
        },
        {
          name: "John Doe",
          role: "Senior Product Manager",
          description: "I spent the past 3 years of my career as a senior product manager, working on internal cloud solutions.",
          coords: { top: 50, left: 10 },
          img: people[6],
          pulseColor: "red",
          interests: ["Marketing", "UX", "Golf"]
        }
        ,
        {
          name: "John Doe",
          role: "Senior Product Manager",
          description: "I spent the past 3 years of my career as a senior product manager, working on internal cloud solutions.",
          coords: { top: 60, left: 10 },
          img: people[7],
          pulseColor: "red",
          interests: ["Marketing", "UX", "Golf"]
        }
        ,
        {
          name: "John Doe",
          role: "Senior Product Manager",
          description: "I spent the past 3 years of my career as a senior product manager, working on internal cloud solutions.",
          coords: { top: 60, left: 20 },
          img: people[8],
          pulseColor: "red",
          interests: ["Marketing", "UX", "Golf"]
        },
        {
          name: "John Doe",
          role: "Senior Product Manager",
          description: "I spent the past 3 years of my career as a senior product manager, working on internal cloud solutions.",
          coords: { top: 70, left: 45 },
          img: people[9],
          pulseColor: "amber",
          interests: ["Marketing", "UX", "Golf"]
        },
        {
          name: "John Doe",
          role: "Senior Product Manager",
          description: "I spent the past 3 years of my career as a senior product manager, working on internal cloud solutions.",
          coords: { top: 85, left: 45 },
          img: people[10],
          pulseColor: "amber",
          interests: ["Marketing", "UX", "Golf"]
        },
        {
          name: "John Doe",
          role: "Senior Product Manager",
          description: "I spent the past 3 years of my career as a senior product manager, working on internal cloud solutions.",
          coords: { top: 85, left: 55 },
          img: people[11],
          pulseColor: "amber",
          interests: ["Marketing", "UX", "Golf"]
        },
        {
          name: "John Doe",
          role: "Senior Product Manager",
          description: "I spent the past 3 years of my career as a senior product manager, working on internal cloud solutions.",
          coords: { top: 56, left: 55 },
          img: people[12],
          pulseColor: "amber",
          interests: ["Marketing", "UX", "Golf"]
        },
        {
          name: "John Doe",
          role: "Senior Product Manager",
          description: "I spent the past 3 years of my career as a senior product manager, working on internal cloud solutions.",
          coords: { top: 50, left: 30 },
          img: people[13],
          pulseColor: "red",
          interests: ["Marketing", "UX", "Golf"]
        },
      ].map((x, i) => {
        x.index = i;
        x.expanded = false;
        x.toggleCard = this.toggleCard.bind(this);
        x.coords.topFixed = x.coords.top;
        return x;
      })
    };
    this.navClosed = true;
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
    if (!this.mapImg || !this.appEl) {
      setTimeout(this.fixIconHeightOffset, 1000);
      return;
    }
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
    setTimeout(this.fixIconHeightOffset, 1000);
  }

  openNav() {
    this.navClosed ? (document.getElementById("mySidenav").style.width = "250px") :
      (document.getElementById("mySidenav").style.width = "0");
    this.navClosed = !this.navClosed;
  }



  render() {
    return (
      <div className="App" ref={(appEl) => this.appEl = appEl}>
        <div className="App-header">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img className="App-logo" src={logo} style={{display: "inline-block" }} />

            <h4 style={{ display: "inline" }}>FLOOR</h4><p style={{marginTop: "12px", color:"grey"}}>&nbsp;&nbsp;from the ground up</p>

          </div>
          <span style={{display: "inline-block", cursor: "pointer", fontWeight: "bold", paddingRight: "1em", zIndex: 10}} onClick={() => this.openNav()}>
          <img className="Meet" src={meet} style={{display: "inline-block" }} />

          Meet New People</span>
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
