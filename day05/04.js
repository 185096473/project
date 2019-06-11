var express=require("express")
// http.createServer
var app=express()
app.get("/aa",(req,res)=>{
	res.send({"success":"ok","data":{"name":"tom"}})
})
// express路由不区分大小写
app.get("/Bb",(req,res)=>{
	res.send("eerer")
})
app.listen(3000)
