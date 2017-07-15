import React from 'react';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './ProfileCard.css';

class ProfileCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profilecard-container"
          style={{ top: this.props.coords.topFixed + "%", left: this.props.coords.left + "%"}} >
        <div className={"profilecard-inner card-1" + (this.props.expanded ? " expanded" : "") +
            " " + this.props.pulseColor}
            onClick={(e) => { e.preventDefault(); this.props.toggleCard(this.props.index); return false; }}
            style={{
              backgroundImage: this.props.expanded ? 'none' : `url(${this.props.img})`
            }}>
          {this.props.expanded ? (
            <CSSTransitionGroup
                transitionName="profilecard-contents-group"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}>
              <div style={{ display: "flex", marginBottom: "1em" }}>
                <div className="profilecard-photo" style={{backgroundImage: `url(${this.props.img})`}}>
                </div>
                <div className="profilecard-text-container">
                  <div className="profilecard-title">{this.props.name}</div>
                  <div className="profilecard-role">{this.props.role}</div>

                </div>
              </div>
              <div className="profilecard-descr">{this.props.description}
              {this.props.interests.map(i => <span className="w3-tag w3-round-medium w3-teal">{i}</span>)}



              </div>
            </CSSTransitionGroup>
          ) : ""}
        </div>
      </div>
    );
  }
}

export default ProfileCard;
