const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data){
  let errors = {};
  data.email = !isEmpty(data.email) ? data.email : "";
  data.name = !isEmpty(data.name) ? data.name : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if(Validator.isEmpty(data.email)) {
    errors.email = "Please fill the email field"
  }
  if(!Validator.isEmail(data.email)) {
    errors.email = "Please use a valid email"
  }
  if(!Validator.isLength(data.email, {min: 8, max: 30})) {
    errors.email = "Email must be between 8 and 30 characters"
  }
  if(Validator.isEmpty(data.name)) {
    errors.name = "You must include your name to register"
  }
  if(Validator.isEmpty(data.password)) {
    errors.password = "Password field must be included"
  }
  if(!Validator.isLength(data.password, {min: 6, max: 20})) {
    errors.password = "Password must be between 6 and 20 characters"
  }
  if(!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match"
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}
