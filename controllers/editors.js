const express = require('express');
var router = express.Router();
var app = express();
const ArticlesModel = require('../models/articles.js');

// Display the editors page
router.get("/", function(req, res)
{

  function renderPage(results)
  {
    function rpage(articleArray)
    {
      req.TPL.Userdata=results;
      req.TPL.Articledata=articleArray;
      res.render("editors",req.TPL);
    }

    ArticlesModel.getAllArticles(rpage);

  }
  ArticlesModel.getAllUser(renderPage);

});

router.get("/delete/:title",function(req,res)
{
  function rpage(userArray)
  {
    function renderPage(articleArray)
    {
      // Reneder the page with the articel deleted
      req.TPL.Userdata=userArray;
      req.TPL.Articledata=articleArray;
      res.render("editors",req.TPL);
    }
    function getArticle(){ArticlesModel.getAllArticles(renderPage);}
    ArticlesModel.deleteArticle(req.params.title,getArticle);
  }
  ArticlesModel.getAllUser(rpage);
});

router.get("/delet/:username",function(req,res)
{
  function rpage(articleArray)
  {
    function renderPage(userArray)
    {
      // Reneder the page with the author and an articel deleted
      req.TPL.Userdata=userArray;
      req.TPL.Articledata=articleArray;
      res.render("editors",req.TPL);
    }
    function getUser(){ArticlesModel.getAllUser(renderPage);}
    ArticlesModel.deleteUser(req.params.username,getUser);
  }
  function getDelUserArticle(){ArticlesModel.getAllArticles(rpage);}
  ArticlesModel.deleteUserArticle(req.params.username,getDelUserArticle);

});

module.exports = router;
