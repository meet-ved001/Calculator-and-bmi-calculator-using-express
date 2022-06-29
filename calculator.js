const express= require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
  res.sendfile(__dirname+"/index.html");
})

app.post("/",function(req,res){
  // console.log(req.body);
  var num1=Number(req.body.num1);
  var num2=Number(req.body.num2);
  var result=num1+num2;
  res.send("The result of the calculation is "+ result);
  res.send("Thanks for posting");
})




app.get("/bmicalculator",function(req,res){
  res.sendfile(__dirname+"/bmiCalculator.html");
})

app.post("/bmicalculator",function(req,res){
  var txt1=parseFloat(req.body.txt1);
  var txt2=parseFloat(req.body.txt2);
  var result1= (txt1)/(txt2*txt2);
  res.send("Your BMI is "+result1);
})

app.listen(3000,function(){
  console.log("Server is running on port 3000.");
})
