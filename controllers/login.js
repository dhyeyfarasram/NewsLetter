const express = require('express');
var router = express.Router()
const ArticlesModel = require('../models/articles.js')

// Displays the login page
router.get("/", function(req, res)
{
  // if we had an error during form submit, display it, clear it from session
  req.TPL.login_error = req.session.login_error;
  req.session.login_error = "";

  // render the login page
  res.render("login", req.TPL);

});

// Attempts to login a user
// - The action for the form submit on the login page.
router.post("/attemptlogin", function(req, res)
{
  function renderPage(userArray)
  {

    const result = userArray.filter(userArray => userArray.username == req.body.username);

if(result == '')
{
      req.session.login_error = "Invalid username!!";
      res.redirect("/login");
}
else
{
  uname = result[0].username;
  pass = result[0].password;
  access = result[0].level;

    // is the username and password OK?
    if (req.body.username == uname && req.body.password == pass)
    {
        // set a session key username to login the user
        req.session.username = req.body.username;
        req.session.level = access;

        if(req.session.level == 'member'){res.redirect("/members");}
        else{res.redirect("/editors");}

        // re-direct the logged-in user to the members page
      }
      else
      {
        // if we have an error, reload the login page with an error
        req.session.login_error = "Invalid password!!";
        res.redirect("/login");
      }
}


}
ArticlesModel.getAllUser(renderPage);

});


// Logout a user
// - Destroys the session key username that is used to determine if a user
// is logged in, re-directs them to the home page.
router.get("/logout", function(req, res)
{
  delete(req.session.username);
  delete(req.session.level);
  res.redirect("/home");
});

module.exports = router;
