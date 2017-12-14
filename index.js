const express=require('express');
const app=express();
app.use(express.static(__dirname));
var engines=require("ejs");
app.engine('html',engines.renderFile);
app.set('view engine','html');
var bodyparser=require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

var routes=require('./routes');
app.use('/',routes);

app.use(function(err,req,res,next)
{
res.render("error",{error:err.stack});
});

app.listen(3000,function(){
console.log("up with routes");
});