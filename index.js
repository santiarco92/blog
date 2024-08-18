import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));



const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


var userComment = "";
var userId = "";


// Initial

app.get("/", (req, res) => {
  res.render("index.ejs");
  });



// Delete

const btnDelete = $(".btn-d");

console.log(btnDelete);


//Edit




  // comments

app.post("/submit", (req,res) => {
  userComment = req.body.userComment;
  userId = req.body.userId;
  res.render(__dirname + "/view/index.ejs", {
    userI: userId,
    userC: userComment,
  });
  console.log(userComment + "  " + userId);
});



  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });