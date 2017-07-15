import React from 'react';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
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
          {this.state.expanded ? (
            <CSSTransitionGroup
                transitionName="profilecard-contents-group"
                transitionAppear={true}
                transitionAppearTimeout={500}>
              <div style={{ display: "flex", marginBottom: "1em" }}>
                <div className="profilecard-photo">OK</div>
                <div className="profilecard-text-container">
                  <div className="profilecard-title">{this.props.name}</div>
                  <div className="profilecard-role">{this.props.role}</div>
                </div>
              </div>
              <div className="profilecard-descr">{this.props.description}</div>
            </CSSTransitionGroup>
          ) : ""}
        </div>
      </div>
    );
  }
}

export default ProfileCard;
