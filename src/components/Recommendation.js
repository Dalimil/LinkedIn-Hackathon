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
  closeNav() {
        return (document.getElementById("mySidenav").style.width = "0");
   }
  render() {
    return (
      <div id="mySidenav" className="sidenav">


      <a href="javascript:void(0)" className="closebtn" onClick={() => this.closeNav()}>&times;</a>


      <div className="w3-container">

      <div className="w3-card-4" style={{width: "70%:",bgcolor:"#fff"}}>

      <header className="w3-container w3-light-grey">
        <h3>John Doe</h3>
      </header>
      <div className="w3-container">
        <p>1 new friend request</p>
        <hr/>
        <img src="people[1]" alt="Avatar" class="w3-left w3-circle w3-margin-right" style={{width:"60px"}}/>
        <p>CEO at Mighty Schools. Marketing and Advertising. Seeking a new job and new opportunities.</p>
      </div>
      <button className="w3-button w3-block w3-dark-grey">+ Connect</button>

      </div>
      </div>
</div>






    );
  }
}

export default Recommendation;
