const fs = require("fs");

fs.readFile("./content.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) return "Something went wrong";
  console.log(data);
  fs.readFile("./content-1.txt", { encoding: "utf-8" }, (err, data) => {
    console.log(data);
  });
});

// fs.writeFile(
//   "./output/write-async.txt",
//   "I AM FROM ASYNC FILE\n",
//   { flag: "a" },
//   (err, data) => {
//     if (err) return "Something went wrong";
//     console.log("File written successfully");
//   }
// );
