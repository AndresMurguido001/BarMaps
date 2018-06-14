const mongoose = require("mongoose");
const express = require("express");
const user = require("./routes/api/user");
const bodyparser = require("body-parser");
const passport = require("passport");
const cors = require('cors');

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
//require mlab url
const db = require("./config/keys").mongoURI
//connect to db
mongoose.connect(db)
.then(() => console.log("DB connected"))
.catch(err => console.log(err))
app.use(cors());
// Passport middleware
app.use(passport.initialize());
//Configure passport
require("./config/passport")(passport)
//routes
app.use("/api/user", user)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Successfully connected on port: ${port}`))
