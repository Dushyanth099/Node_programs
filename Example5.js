var fs1 = require("fs");

fs1.readdir("./myFolder", (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Directory read successfully!Here are the files");
  console.log(files);
});
