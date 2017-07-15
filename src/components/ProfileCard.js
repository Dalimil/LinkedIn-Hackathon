import React from 'react';

import './ProfileCard.css';

class ProfileCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  toggleCard() {
    this.setState(prevState => ({ expanded: !prevState.expanded}));
  }

  render() {
    return (
      <div className="profilecard-container">
        <div className={"profilecard-inner" + (this.state.expanded ? " expanded" : "")}
          onClick={this.toggleCard.bind(this)} >
        </div>
      </div>
    );
  }
}

export default ProfileCard;
