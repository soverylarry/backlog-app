const router = require("express").Router();
const Booksandmovies = require("../models/booksandmovies.js");


router.get("/api/booksandmovies", (req, res) => {
    Booksandmovies.find({})
      .sort({ date: -1 })
      .then(dbBooksandmovies => {
        res.json(dbBooksandmovies);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  module.exports = router;
  