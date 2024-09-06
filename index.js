const path = require("path");
const express = require("express");
const upload = require('./routes/upload')
// const blog = require('./routes/blog')
const app = express();

const port = 8080;

app.use("/uploads", express.static("uploads"));


app.set("view engine" , "ejs");
app.set("views" , path.resolve("./views"));

app.use(express.urlencoded( {extented: false}));

app.get("/", (req ,res)=>{
    return res.render("homepage");
})
app.use('/upload', upload);
// app.use('/blog',blog);
// app.use('/files',files);

app.listen(port, ()=>{
    console.log(`server started at ${port}`);
})