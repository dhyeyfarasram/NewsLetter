const express = require('express');
var router = express.Router()
const ArticlesModel = require('../models/articles.js')

// Displays the signup page
router.get("/", function(req, res)
{
  // if we had an error during form submit, display it, clear it from session
  req.TPL.login_error = req.session.login_error;
  req.session.login_error = "";
  req.TPL.displaysignup = true;
  req.TPL.displaylogin = false;

  // render the Signup page
  res.render("signup", req.TPL);

});

// Attempts to signup a user
// - The action for the form submit on the signup page.

router.post("/attemptsignup", function(req, res)
{
  function renderPage(userArray)
  {
    req.TPL.display = true;
    res.render('signup',req.TPL);
  }
function getUser(){ArticlesModel.getAllUser(renderPage)}


  if (req.body.username.length >= 1 &&  req.body.password.length >= 1)
  {
    //this function will check is the user-name is already taken
    function checkUser(userArray)
    {
      const result = Object.values(userArray).filter(userArray => userArray.username == req.body.username);
      if (result == "")
      {
        //add the user if the username is not taken
        ArticlesModel.addUser(req.body.username,req.body.password,getUser);
      }
      else
      {
        //redirect to signup page of username is taken
        req.session.login_error = "UserName not available";
        res.redirect("/login/signup");
      }
    }
    ArticlesModel.getAllUser(checkUser)
  }
  else
  {
    // if we have an error, reload the login page with an error
    req.session.login_error = "username and/or password cannot be empty";
    res.redirect("/login/signup");
  }


});

// Logout a user
// - Destroys the session key username that is used to determine if a user
// is logged in, re-directs them to the home page.
router.get("/logout", function(req, res)
{
  delete(req.session.username);
  delete(req.session.access);
  res.redirect("/home");
});

module.exports = router;
