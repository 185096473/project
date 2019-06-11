var http=require("http")
var url=require("url")
http.createServer((req,res)=>{
	// reslove  解析路径并进行拼接
	// var data=url.resolve("http://127.0.0.1:3000","/first/login")
	// format  把对象转化为字符串输出
	var data=url.format({
	   protocol:"http:",
	   host:"127.0.0.1",
	   port:"3000"
	})
	console.log(data)
	res.end("111")
}).listen(3000)