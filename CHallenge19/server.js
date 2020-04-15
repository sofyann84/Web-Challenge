const express = require("express");
const app = express();

const path = require("path");
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf8"));
const write = (data) => fs.writeFileSync("data.json", JSON.stringify(data, null, 3));

var bodyParser = require('body-parser')

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
   extended: false
}))

app.use(bodyParser.json())
app.use("/", express.static(path.join(__dirname, "views")));

app.get('/', (req, res) => {
   res.render("index",{json:data})
})

//  untuk form add

app.get('/add', (req, res) => {
   res.render("add")
})

app.post('/add',(req, res) => {
   data.push ({
      id: req.body.id,
      string: req.body.string,
      integer: req.body.integer,
      float: req.body.float,
      date: req.body.date,
      boolean: req.body.boolean
   })
   write(data);
   res.redirect('/');
})

//untuk form edit

app.get('/edit/:id', (req, res) => {
   const id = req.params.id;
   res.render("edit", {item:{...data[id]}, id});
})

app.post('/edit/:id',(req, res) => {
   const id = req.params.id;
   let isi = {
      id: req.body.id,
      string: req.body.string,
      integer: req.body.integer,
      float: req.body.float,
      date: req.body.date,
      boolean: req.body.boolean
   }
   data.splice(id, 1, isi);
   write(data);
   res.redirect('/');
})

app.get('/delete/:id', (req, res) => {
   const id = req.params.id;
   data.splice(id,1);
   write(data);
   res.redirect('/');
})

app.listen(3000, () => {
   console.log(`web ini berjalan di port 3000!`);
});