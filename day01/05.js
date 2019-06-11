var http=require("http")
var url=require("url")
http.createServer((req,res)=>{
         res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
		 var data=url.parse(req.url,true).query
		 if(data.username=="admin"&&data.password=="123"){
			res.end("登陆成功")
		 }else{
			 res.end("登录失败")
		 }
}).listen(3000)