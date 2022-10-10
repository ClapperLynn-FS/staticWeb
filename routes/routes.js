const express = require('express');
const router = express.Router();
const path = require('path');

router.get("/",(req,res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname,"..","/views/blog-home.html"));
});

router.get("/news",(req,res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, '..', '/views/blog-news.html'));
});

router.get("/stories",(req,res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, '..', '/views/blog-stories.html'));
});
module.exports = router;