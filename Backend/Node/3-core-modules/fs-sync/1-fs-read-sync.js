const fs = require("fs");

const fileContent = fs.readFileSync("./content.txt", { encoding: "utf-8" });
const fileContentOne = fs.readFileSync("./content-1.txt", {
  encoding: "utf-8",
});
console.log(fileContent);
console.log(fileContentOne);

// fs.writeFileSync("./output/write.txt", "WRITE FILE SYNC\n", { flag: "a" });
