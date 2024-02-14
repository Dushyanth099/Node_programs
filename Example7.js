const fs = require("fs");

fs.unlink("./myFolder/newFileAsync.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("File Deleted successfully");
  }
});
