import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import { getCurrentLocation } from '../actions/locationActions'
import MyFancyComponent from './maps/MapComponent'
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
    if (nextProps.userLocation){
      this.setState({
        locationReceived: true,
        location: nextProps.userLocation
      })
    }

  }

  componentWillMount() {
    this.props.getCurrentLocation();    
  }



  onClick(e) {
    e.preventDefault();
    this.props.logoutUser()
  }
  render() {
    const { error } = this.state
    let { user } = this.props.auth
    let { locationReceived } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <h4 className="display-5">
              Get your drink on!
            </h4>
            <p className="text-lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit itaque, debitis, suscipit error dolorem magni labore, est eligendi accusantium impedit, minima ipsum quae adipisci cupiditate perferendis minus repellat aut quidem qui. Facilis temporibus et officiis esse voluptatum dolorem dignissimos voluptatem.
            </p>
          </div>
          <div className="col-xl-4">
            <div className="card mb-5">
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
        { locationReceived ? <MyFancyComponent className="mt-5"/> : <h2>Loading...</h2> }
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
  userLocation: state.location.userLocation,
})

export default connect(mapStateToProps, { logoutUser, getCurrentLocation })(Profile);
