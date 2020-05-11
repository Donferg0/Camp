var express = require("express");
var app = express();

app.set("view engine", "ejs")

app.get("/", function(req, res){
    res.render("landing.ejs");
});

app.get("/campgrounds", function(req, res){
var campgrounds = [
    {name: "Yosemite", image: "https://pixabay.com/get/57e1d14a4e52ae14f1dc84609620367d1c3ed9e04e5074417c2e79d19748c3_340.jpg"},
    {name: "Yellow Stone", image: "https://pixabay.com/get/57e1dd4a4350a514f1dc84609620367d1c3ed9e04e5074417c2e79d19748c3_340.jpg"},
    {name: "Pride Rock", image: "https://pixabay.com/get/52e3d5404957a514f1dc84609620367d1c3ed9e04e5074417c2e79d19748c3_340.jpg"}
]

res.render("campgrounds", {campgrounds:campgrounds});

})

app.listen(3000, function(){
    console.log("Started")
})