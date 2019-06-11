var http=require("http")
var fs=require("fs")
var ejs=require("ejs")
http.createServer((req,res)=>{
	res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
	// Node渲染的方式
	fs.readFile("./static/list.ejs",(err,data)=>{
		var tempalte=data.toString() 
		var result={
			list:["首页","新闻","关于"]
		}
		var newdata=ejs.render(tempalte,result)
		res.end(newdata)
	})
	
}).listen(3000)