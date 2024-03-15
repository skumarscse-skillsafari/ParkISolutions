const http = require("http");
const fs = require("fs");

const indexPage = fs.readFileSync("./Course-Website/index.html", {
  encoding: "utf-8",
});
const stylePage = fs.readFileSync("./Course-Website/css/style.css");

const headerImg = fs.readFileSync("./Course-Website/images/header-shape.svg");

const app = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.write(indexPage);
    res.end();
  } else if (req.url === "/css/style.css") {
    res.writeHead(200, {
      "Content-Type": "text/css",
    });
    res.write(stylePage);
    res.end();
  } else if (req.url === "/images/header-shape.svg") {
    res.writeHead(200, {
      "Content-Type": "image/svg+xml",
    });
    res.write(headerImg);
    res.end();
  } else {
    res.write(`
          <h1>Something went wrong</h1>
          <a href="/">Back to home page</a>
          `);
    res.end();
  }
});

app.listen(5000, () => {
  console.log("Server is running in: http://localhost:5000");
});
