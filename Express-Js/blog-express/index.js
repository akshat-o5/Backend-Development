const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

// // CREATING OUR OWN EXPRESS MIDDLEWARE
// const akshatMiddleware = (req, res, next) => {
//   console.log(req)
//   next()
// }

// USING EXPRESS MIDDLEWARES
app.use(express.static(path.join(__dirname, "static")))
// app.use(akshatMiddleware)
app.use('/', require(path.join(__dirname, "routes/blog.js")))

// app.get("/", (req, res) => {
//   res.sendFile();
// });

// app.get("/about", (req, res) => {
//   // res.send('Hello World! about')
//   // res.sendFile(path.join(__dirname, 'index.html'))
//   // res.status(500)
//   res.json({ akshat: 34 });
// });

app.listen(port, () => {
  console.log(`Blog app listening on port http://localhost:${port}`);
});
