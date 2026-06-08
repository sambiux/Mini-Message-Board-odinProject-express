const express = require('express');
const app = express();
const path = require("node:path")
const messageRouter = require("./routes/indxRouter.js")
const dotenv= require("dotenv");


const links = [
  { href: "", text: "Home" },
  { href: "/new", text: "New" },
];

/*configuracion ejs */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));



app.use("/", messageRouter);
app.use("/new", messageRouter)

const PORT = process.env.PORT || 3000;


app.listen(PORT, () =>{
    console.log("El servidor esta corriendo en el puerto" + PORT);
})