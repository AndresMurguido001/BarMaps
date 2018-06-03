import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';



class NavBar extends Component {
  render() {
    const { auth } = this.props;

    return (
        <div className="my-5">
          <nav className="navbar navbar-expand-md navbar-light bg-secondary fixed-top py-3">
            <div className="container">
                  <a className="navbar-brand">BarMaps</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarContent">
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item px-2">
                          <Link to="/profile" className="nav-link">
                            Profile
                          </Link>
                        </li>
                        <li className="nav-item px-2">
                          <a className="nav-link" href="">
                            Bars
                          </a>
                        </li>
                        <li className="nav-item pr-2">
                          <Link to='/login' className="btn btn-light">
                            {auth.isAuthenticated ? "Logout" : "Login"}
                          </Link>
                        </li>
                      </ul>
                    </div>
                </div>
          </nav>
        </div>
    );
  }
}

NavBar.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(NavBar);
