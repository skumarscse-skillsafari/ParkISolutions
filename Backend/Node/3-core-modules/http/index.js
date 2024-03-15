const http = require("http");

const app = http.createServer((req, res) => {
  if (req.url === "/") {
    // http://localhost:5000
    res.write("<h1>Welcome to HTTP module</h1>");
    res.end();
  } else if (req.url === "/about") {
    // http://localhost:5000/about
    res.write("<h1>This is About page</h1>");
    res.end();
  } else if (req.url === "/contact") {
    // // http://localhost:5000/contact
    res.write("<h1>This is Contact page</h1>");
    res.end();
  } else {
    res.write(`
    <h1>Something went wrong</h1>
    <a href="/">Back to home page</a>
    `);
    res.end();
  }
});

// 5000
app.listen(5000, () => {
  console.log("Server is running in http://localhost:5000");
});
