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
      <div className="profilecard-container"
          style={{ top: this.props.coords.top, left: this.props.coords.left}} >
        <div className={"profilecard-inner card-1" + (this.state.expanded ? " expanded" : "")}
            onClick={this.toggleCard.bind(this)}
            style={{ backgroundImage: this.state.expanded ? 'none' : `url(${this.props.img})`}}>
          {this.state.expanded ? (
            <CSSTransitionGroup
                transitionName="profilecard-contents-group"
                transitionAppear={true}
                transitionAppearTimeout={500}>
              <div style={{ display: "flex", marginBottom: "1em" }}>
                <div className="profilecard-photo" style={{backgroundImage: `url(${this.props.img})`}}>
                </div>
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
