const http = require ('http')

const server = http.createServer((request, response) =>{
    if (request.url === '/') {
        response.end('WElcome to our home page')
    }
    if (request.url === '/about') {
        response.end('Here is our short history')
    }
    response.end(`
    <h1>oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href ="/">back home</a>
    `)
    // response.write('Welcome to our home page.')
    // response.end()
})
server.listen(5000)

// AFTER THIS, GO TO GOOGLE AND TYPE 'localhost:5000

