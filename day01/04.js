var http=require("http")
var url=require("url")
http.createServer((req,res)=>{
	// url.parse  两个参数  第一个参数为路径  第二个参数 true或false  默认值
	//fasle    加上true会转化为对象
	var params=url.parse(req.url,true).query
	console.log(params)
	console.log(params.age)
	res.end("结束")
}).listen(3000)