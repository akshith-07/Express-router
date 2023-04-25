const express = require("express");
const app = express();

const register = require("./register.js");
const login = require("./login.js");
const home = require("./home.js");
const about = require("./about.js");
const services = require("./services.js");
const find = require("./findusers.js");

const middlewareusers = require("./middlewareusers.js");

app.get("/", (request, response) => {
  response.send("Hi I am Akshith Jobirin S");
});

app.use("/register", register);
app.use("/login", login);
app.use("/home", home);
app.use("/about", about);
app.use("/service", services);
app.use("/finduser", find);
app.use("/middlewareusers", middlewareusers);

app.listen(3501);
