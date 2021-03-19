const { response } = require("express");
const express = require("express");
const routes = require("./routes/index.js")

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(routes);

app.listen(3001,()=>{
    console.log("server listening on port 3001")
})
