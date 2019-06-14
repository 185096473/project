var express=require("express")
// mongodb
// 引入mongodb的客户端
var mongoClient=require("mongodb").MongoClient
var app=express()
app.get("/add",(req,res)=>{
	// 客户端连接服务端
	mongoClient.connect("mongodb://127.0.0.1:27017",(err,db)=>{
		// 连接数据库
	var dbName=db.db("test")
	// 查找
	// dbName.collection("data").find({"name":"tom"}).toArray((err,data)=>{
	// 	res.send(data)
	// })
	// 针对集合操作  插入
	// dbName.collection("data").insert({"name":"jack"},(err,data)=>{
	// 	// console.log(data)
	// 	res.send(data)
	// })
	//更新
	// dbName.collection("data").update({"name":"jack"},
	// {$set:{"name":"jacks"}},(err,data)=>{
	// 	res.send(data)
	// })
	// 删除
	dbName.collection("data").deleteOne({"name":"jacks"},(err,data)=>{
		if(err){
			throw err
		}
		res.send({"success":"删除成功"})
	})
})
	
})
app.listen(3000)