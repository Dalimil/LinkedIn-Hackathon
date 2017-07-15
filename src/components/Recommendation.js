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
        return (document.getElementById("mySidenav").style.width = "0");
   }
  render() {
    return (
      <div id="mySidenav" className="sidenav">


      <a href="javascript:void(0)" className="closebtn" onClick={() => this.closeNav()}>&times;</a>


      <div className="w3-container">

      <div className="w3-card-4" >

      <header className="w3-container w3-light-grey">
        <h3>Stephan S.</h3>
      </header>
      <div className="w3-container">
      <p><span className="w3-tag w3-round-medium w3-blue">Fri, 5-6pm</span>
      </p>

        <img src={people[1]} alt="Avatar" class="w3-left w3-circle" style={{width:"80px"}}/>
        <hr/>
        <p><span className="w3-tag w3-round-medium w3-teal">Horse Riding</span></p>
          <p><span className="w3-tag w3-round-medium w3-teal">Theatre</span></p>
          <p>I am working as Senior Software Developer since past 5 years. </p>
      </div>
      <button className="w3-button w3-block w3-dark-grey">+ Connect</button>

      </div>


      </div>



</div>


    );
  }
}

export default Recommendation;
