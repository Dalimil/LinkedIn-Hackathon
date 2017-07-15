import React from 'react';
import { people } from './people';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './Recommendation.css';

class Recommendation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }
  closeNav() {
        //return (document.getElementById("mySidenav").style.width = "0");
   }
  render() {
    return (
      <div id="mySidenav" className="sidenav" onClick={() => this.closeNav()}>

      <div className="w3-container">

      <div className="w3-card-4" >

      <header className="w3-container w3-light-grey">
        <h3>Stephan S.</h3>
      </header>
      <div className="w3-container">
      <p><span className="w3-tag w3-round-medium w3-blue">Fri, 5-6pm @ the eBar</span>
      </p>

        <img src={people[1]} alt="Avatar" className="w3-left w3-circle" style={{width:"80px"}}/>

        <div style={{ display: "flex", flexWrap: "wrap"}}>
          <span style={{ margin: "0.5em 0.5em 0 0" }} className="w3-tag w3-round-medium w3-teal">Marketing</span>
          <span style={{ margin: "0.5em 0.5em 0 0" }} className="w3-tag w3-round-medium w3-teal">Paragliding</span>
          <div style={{ margin: "0.5em 0" }}>
          I spent the past 3 years as a senior product manager, working on internal cloud solutions. I love hiking and rock-climbing -- whatever gets my adrenaline pumping!
          </div>
        </div>
      </div>
      <button className="w3-button w3-block w3-dark-grey">+ Connect</button>

      </div>


      </div>



</div>


    );
  }
}

export default Recommendation;
