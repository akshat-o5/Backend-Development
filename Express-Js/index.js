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
app.use(express.static(path.join(__dirname, "public")))
// app.use(akshatMiddleware)

app.get("/hello/:name", (req, res) => {
  res.send("Hello World!" + req.params.name);
});

app.get("/about", (req, res) => {
  // res.send('Hello World! about')
  // res.sendFile(path.join(__dirname, 'index.html'))
  // res.status(500)
  res.json({ akshat: 34 });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
