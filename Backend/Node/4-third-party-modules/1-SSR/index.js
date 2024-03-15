const express = require("express");

const app = express();

app.use(express.static("./Course-Website"));
// routes
// req <=> res
// http methods => get, post, put/patch, delete
app.get("/", (req, res) => {
  res.status(200).write("<h1>Welcome to Express</h1>");
  res.send();
});

// app.get("/about", (req, res) => {
//   res.status(200).write("<h1>About page</h1>");
//   res.send();
// });

// app.get("/contact", (req, res) => {
//   res.status(200).write("<h1>Contact Page</h1>");
//   res.send();
// });

app.get("*", (req, res) => {
  res.status(400).write(`
    <h1>Something went wrong</h1>
    <a href="/">Back to home page</a>
    `);
  res.send();
});

app.listen(5000, () => {
  console.log("Server is running in: http://localhost:5000");
});
