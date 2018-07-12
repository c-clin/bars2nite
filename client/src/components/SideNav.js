import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const SideNav = props => {
  const authLinks = (
    <div className="links-container">
      <li className="links-container__item">
        <Link to="/events">Your RSVP</Link>
      </li>
      <li className="links-container__item">
        <Link to="/all-events">Popular Events</Link>
      </li>
      <li className="links-container__item">
        <a href="/api/logout">Logout</a>
      </li>
    </div>
  );

  const guestLinks = (
    <div className="links-container">
      <li className="links-container__item">
        <Link to="/all-events">All Events</Link>
      </li>
      <li className="links-container__item">
        <a href="/auth/google">Login</a>
      </li>
    </div>
  );

  return <div className="side-nav">{props.auth ? authLinks : guestLinks}</div>;
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(SideNav);
