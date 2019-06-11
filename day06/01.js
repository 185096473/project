var express=require("express")
// createApplication 服务端
var  app=express()
// .get  前端请求的方式   :options  路由参数
app.get("/login/:id",(req,res)=>{
	console.log(req.params)
	res.send(req.params.id)
})
app.listen(3000,()=>{
	console.log("服务端已经启动")
})