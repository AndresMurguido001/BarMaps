import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import { getCurrentLocation } from '../actions/locationActions'
import MapComponent from './maps/MapComponent'
import keys from '../config/keys'

class Profile extends Component {
  constructor(){
    super();
    this.state = {
      error: {},
      location: {},
      locationReceived: false
    }
    this.onClick = this.onClick.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.userLocation) {
      this.setState({
        location: nextProps.userLocation,
        locationReceived: true
      })
    }
  }

  componentWillMount() {
    this.props.getCurrentLocation()
  }



  onClick(e) {
    e.preventDefault();
    this.props.logoutUser()
  }
  render() {
    const { error } = this.state
    let { user } = this.props.auth

    return (
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
          </div>
          <div className="col-xl-4">
            <div className="card">
              <div className="card-header">
                <span>
                  <i className="fas fa-user"></i>
                <h2 className="display-5">
                  Welcome, {user.user.name}
                </h2>
                </span>
              </div>
              <div className="card-body">
                <label className="d-block">Email: </label>{user.user.email}
              </div>
              <div className="card-footer">
                <button onClick={this.onClick} className="btn btn-secondary btn-block">
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
        {this.state.locationReceived ? (<MapComponent isMarkerShown={false}
                                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${keys.googleKey}`}
                                        loadingElement={<div style={{ height: `100vh` }} />}
                                        containerElement={<div style={{ height: `400px` }} />}
                                        mapElement={<div style={{ height: `100vh` }} />}
                                        center={this.state.location}
                                      />) : <h2>Loading...</h2>}
      </div>
    );
  }
}
Profile.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error,
  userLocation: state.location.userLocation
})

export default connect(mapStateToProps, { logoutUser, getCurrentLocation })(Profile);
