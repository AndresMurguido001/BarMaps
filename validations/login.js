const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data){
  let errors = {};
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if(Validator.isEmpty(data.email)) {
    errors.email = "Please fill the email field"
  }
  if(!Validator.isEmail(data.email)) {
    errors.email = "Please use a valid email"
  }
  if(Validator.isEmpty(data.password)) {
    errors.password = "Password field must be included"
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}
