var express=require("express")
// 中间件
var bodyparser=require("body-parser")
var app=express()
// 处理json数据
app.use(bodyparser.json())
// 处理字符串数据
app.use(bodyparser.urlencoded({extends:false}))
app.get("/login",(req,res)=>{
   console.log(req.query.username)
   console.log(req.query.password)
   res.send()
})
app.post("/register",(req,res)=>{
	console.log(req.body.username)
	console.log(req.body.password)
	res.send()
 })
app.listen(3000)