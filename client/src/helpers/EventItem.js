import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

const EventItem = props => {
  let button;
  console.log(props.auth);
  if (props.auth) {
    button = (
      <button type="button" onClick={() => props.onCancelReservation(props)}>
        Cancel RSVP
      </button>
    );
  }

  return (
    <div className="EventItem">
      <div className="EventItem__image-box">
        <img src={props.image} alt={props.name} />
      </div>

      <div className="EventItem__details">
        <h2>
          <a href={props.website} target="_blank">
            {props.name}
          </a>
        </h2>
        <hr />
        <p>{props.location}</p>
        {button}
      </div>

      <div className="EventItem__going">
        <p>{props.going}</p>
        <p>going</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  actions
)(EventItem);
