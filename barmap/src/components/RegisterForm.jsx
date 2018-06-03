import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../actions/authActions'
import InputGroup from './common/InputGroup'

class RegisterForm extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      error: {}
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.error) {
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
    let newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }
    this.props.registerUser(newUser, this.props.history)
  }
  render() {
    const { error } = this.state
    return (
      <form className="p-5 d-block outline-secondary" onSubmit={this.onSubmit}>
        <h4 className="text-light">
          Find Bars Near You!
        </h4>
        <small className="py-2 text-light">Create your account</small>
          <InputGroup type="text" icon="fas fa-angle-right" placeholder="Name" error={error.name} name="name"  onChange={this.onChange} />
          <InputGroup type="email" icon="fas fa-angle-right" error={error.email} placeholder="Email" name="email" onChange={this.onChange} />
          <InputGroup type="password" icon="fas fa-angle-right" error={error.password} placeholder="Password" name="password" onChange={this.onChange} />
          <InputGroup type="password" icon="fas fa-angle-right" error={error.password} placeholder="Confirm Password" name="password2" onChange={this.onChange} />
        <div className="form-group">
          <input className="btn btn-light text-dark btn-block" type="submit" />
        </div>
      </form>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error
})
RegisterForm.propTypes = {
  auth: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { registerUser })(RegisterForm);
