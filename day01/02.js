var http=require("http")
var server=http.createServer((req,res)=>{
	// console.log(req)  //requset 请求    
	// console.log(res)  //response  响应
	var data={
		username:"tom",
		password:"123456"
	}
	// res.end((1+2+3).toString())
	// toString和toStr的区别？
	var newdata=JSON.stringify(data)
	res.end(newdata.toString())
})
server.listen(3000,()=>{
	console.log("端口已经挂载")
})