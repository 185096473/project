// 登录  注册
var express=require("express")
var router=express.Router()
var bodyparser=require("body-parser")
var app=express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
app.use(router)
var mongoClient=require("mongodb").MongoClient
// 注册
router.post("/register",(req,res)=>{
	mongoClient.connect("mongodb://127.0.0.1:27017",(err,db)=>{
		var dbName=db.db("store")
		var data={
			username:req.body.username,
			password:req.body.password,
			email:req.body.email,
			phone:req.body.phone,	
		}
		dbName.collection("course").insert(data,(err,data)=>{
			res.send({"success":"注册成功"})
		})
	})
})
// 登录
router.post("/login",(req,res)=>{
	mongoClient.connect("mongodb://127.0.0.1:27017",(err,db)=>{
		var dbName=db.db("store")
		var person={
			username:req.body.username,
			password:req.body.password
		}
		dbName.collection("course").find({}).toArray((err,data)=>{
			if(err)  throw err
			if(person.username==data[0].username&&person.password==data[0].password){
				res.send({"success":"登陆成功"})
			}else{
				res.send({"fail":"登录失败"})
			}
		})
	})
})
app.listen(3000)