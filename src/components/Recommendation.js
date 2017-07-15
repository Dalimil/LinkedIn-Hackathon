import React from 'react';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './Recommendation.css';

class Recommendation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }
  render() {
    return (
      <div id="mySidenav" className="sidenav">
      <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>

    );
  }
}

export default Recommendation;
