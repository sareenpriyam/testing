const express= require('express')
const cookie= require('cookie')
app=express()
app.get("/",function(req,res){
    res.send("hi this is server")
})
app.listen(3000)