var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("database.db");

// Return all of the articles
function getAllArticles(callback)
{
  db.all("SELECT * FROM Articles",
  	     function(err,results) { callback(results); });
}

// Create a new article given a title, content and username
function createArticle(article,username,callback)
{
  db.run("INSERT INTO Articles VALUES (?,?,?)",
         [article.title, username, article.content],
         function(err)
         {
           callback();
         });
}

//Delete an article from database
function deleteArticle(title,callback)
{
  db.run("DELETE FROM Articles WHERE title=?", title,
         function(err) { callback(); });
}

// Return all users
function getAllUser(callback)
{
  db.all("SELECT username, * FROM Users",
  	     function(err,results) { callback(results); });
}

// Addes users when they signup
function addUser(uname,upass,callback)
{
  db.run("INSERT INTO Users VALUES (?,?,?)",
         [uname, upass, 'member'],
         function(err) { callback(); });
}

// Delete users
function deleteUser(username,callback)
{
  db.run("DELETE FROM Users WHERE username=?", username,
         function(err) { callback(); });
}

// Delete an article which the user
function deleteUserArticle(username,callback)
{
  db.run("DELETE FROM Articles WHERE username=?", username,
        function(err) { callback(); });
}

module.exports = {getAllArticles,createArticle,getAllUser,addUser,deleteArticle,deleteUser,deleteUserArticle};
