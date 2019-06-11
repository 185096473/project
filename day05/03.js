var http=require("http")
// 按需加载
var {render}=require("art-template")
var fs=require("fs")
http.createServer((req,res)=>{
	res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    var newdata={
		  list:["首页","新闻","关于"]
	}
	fs.readFile("./static/list.art",(err,data)=>{
		var result=render(data.toString(),newdata)
		res.end(result)
	})
	
}).listen(3000)