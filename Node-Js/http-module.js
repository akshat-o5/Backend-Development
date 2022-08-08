
// TO ADD BUILT-IN HTTP MODULE TO OUR FILE
import { createServer } from 'http'

// const server = http.createServer((request, response) =>{
//     if (request.url === '/') {
//         response.end('WElcome to our home page')
//     }
//     if (request.url === '/about') {
//         response.end('Here is our short history')
//     }
//     response.end(`
//     <h1>oops!</h1>
//     <p>We can't seem to find the page you are looking for</p>
//     <a href ="/">back home</a>
//     `)
//     // response.write('Welcome to our home page.')
//     // response.end()
// })
// server.listen(5000)

// // AFTER THIS, GO TO GOOGLE AND TYPE 'localhost:5000'

// // Also , to get erroe page , type  ' localhost:5000/error'



// // NPM CLAAS THE REUSABLE CODE AS PAKAGES

// // A PACKAGE IS ESSENTIALLY A FOLDER THAT CONTAINS A JAVASCRIPT CODE





// JO BHI PORT HUMAARE SERVER KO MIL RHA HAI,  WOH HUM APNAA LENGE
const port = process.env.PORT || 3000

const server = createServer((req, res) => {
    // console.log(req)
    console.log(req.url)
    res.statusCode = 200
    // USING 'Content-Type', OUR REQUEST WILL BE SERVED IN FORM OF HTML
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> Welcome </h1> <p> This is my backend development learning journey  </p>')
})

server.listen(port,() => {
    console.log(`Server is listning on port ${port}`)
})