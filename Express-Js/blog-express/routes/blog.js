const express = require('express')

const path = require('path')

const blogs = require('../data/blogs')

const router = express.Router()


router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../templates/index.html'))
    res.render('home');
})

router.get('/blog', (req, res) => {
    // blogs.forEach(ele => {
    //     console.log(ele.title)
    // });
    // res.sendFile(path.join(__dirname, '../views/bloghome.html'))
    res.render('bloghome', {
        blogs: blogs
    });
})

router.get('/blogpost/:slug', (req, res) => {
    myBlog = blogs.filter((e) => {
        return e.slug == req.params.slug
    })
    console.log(myBlog)
    res.render('blogpage', {
        title: myBlog[0].title,
        content: myBlog[0].content
    });
    // res.sendFile(path.join(__dirname, '../views/blogpage.html'))
})

module.exports = router