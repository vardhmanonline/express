const express=require('express');

var router=express.Router();

router.use(function middleware(req,res,next){
//console.log("this would be hit on every request");
next();
});
router.get("/",function(req,res){
res.sendFile("layout.html",{root:__dirname+'/Views/Shared'});
});
router.get("/login",function(req,res){
res.sendFile("layout.html",{root:__dirname+'/Views/Shared'});
});

router.get("/signin",function(req,res){
res.render("_login.html");
});
router.post("/signin",function(req,res){
var hotels=[
{name:"surya hotel",city:"dharamshala"},{name:"TAJ hotel",city:"Chandigarh"},{name:"IVS",city:"Panchkiula"},
];
res.render("_login",{hotels:hotels,username:req.body.name});
});
router.get("*",function(req,res){
res.send("this is not supported");
});
module.exports=router;