import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputGroup from './common/InputGroup';
import { loginUser } from '../actions/authActions';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {}
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({
        error: nextProps.error
      })
    }
  }
  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault();
    let userData = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.loginUser(userData, this.props.history)
  }
  render() {
    const { error } = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-md-4 mx-auto">
            <form action="#" className="py-5" onSubmit={this.onSubmit}>
              <h2 className="d-block bg-light">
                Login
              </h2>
              <InputGroup name="email" icon="fas fa-user" placeholder="Email" type="text" error={error.email} onChange={this.onChange} />
              <InputGroup name="password" icon="fas fa-key" placeholder="Password" type="password" error={error.password} onChange={this.onChange} />
              <input type="submit" className="btn btn-dark btn-block" />
            </form>
          </div>
        </div>
      </div>
    );
  }

}
const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error
})
Login.propTypes = {
  auth: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { loginUser })(withRouter(Login));
