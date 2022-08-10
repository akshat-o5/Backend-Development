const express = require('express')

const path = require('path')

const blogs = require('.../data/blogs')

const router = express.Router()


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/index.html'))
})

router.get('/blog', (req, res) => {
    blogs.forEach(ele => {
        console.log(ele.title)
    });
    res.sendFile(path.join(__dirname, '../templates/index.html'))
})

module.exports = router