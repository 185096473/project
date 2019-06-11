/**
 * 1.识别功能
 *  1.1 判断是老师还是学生
 *   1.2如果是老师则输出老师的字段和老师的工号
 *   1.2如果是学生则输出学生的字段和学生的学号
 * 
 * 
 */
var express=require("express")
var app=express()
//  var reg=/^\/teacher\/([0-9]{6})$/
app.get(/^\/teacher\/([0-9]{6})$/,(req,res)=>{
	console.log(req.params[0])   
	res.send("老师的工号为"+req.params[0])
})
app.get("/student",(req,res)=>{
	res.send("学生")
})
app.get("/",(req,res)=>{
	res.send("首页")
})
app.listen(3000)
// var http=require("http")
// http.createServer((req,res)=>{
//      if(req.url=="/teacher/:id"){
// 		 res.end("老师"+id)
// 	 }
// }).listen(3000)