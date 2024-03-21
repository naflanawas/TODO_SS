const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true })); //to parse the incoming data
app.use("/static", express.static("public")); //adding this to access public folder css and js files
app.set("view engine", "ejs");//to use the template engine and apply the web template to our web app:
app.get('/', (req, res) => {
    res.render('todo.ejs');
});
app.post('/',(req, res) => {console.log(req.body);});
app.listen(3000, () => console.log("Server Up and running"));