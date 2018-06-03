const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const User = require("../../models/users");
const validateRegisterInput = require("../../validations/register")
const validateLoginInput = require("../../validations/login")

router.get('/test', (req, res) => {
  res.json({ msg: "User works" })
})
//Todo validation, create errors object
//CANNOT HAVE MULTIPLE RES.JSONS RUNNING
router.post("/register", (req, res, next) => {
const { errors, isValid } = validateRegisterInput(req.body)
  if(!isValid) {
    return res.status(400).json(errors)
  }
  User.findOne({ email: req.body.email}).then(user => {
    if (user) {
      res.json({ msg: "User already exists" })
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      })
      newUser.save(jwt.sign({user: newUser}, keys.secret, {expiresIn: "1h"}, (err, token) => {
        if (err) {
          res.json(err)
        } else {
          res.json({token: "Bearer "+ token})
        }
      }))
    }
  })
  .catch(err => res.json(err))
})

  router.post("/login", (req, res, next) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
      return res.status(403).json(errors)
    }
    newSess = {
      email: req.body.email,
      password: req.body.password
    }
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) {
        res.json(err)
      }
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch) {
          next()
        }
        jwt.sign({user}, keys.secret, {expiresIn: "1h"}, (err, token) => {
          if (err) {
            return res.json(err)
          } else {
            return res.json({token: "Bearer "+ token})
          }
        })
      })
    })
  })

  router.get("/profile", passport.authenticate("jwt", {session: false}), (req, res) => {
    res.json({
      id: req.user.id,
      username: req.user.name,
      email: req.user.email
    })
  })

module.exports = router
