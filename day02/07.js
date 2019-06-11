/**
 * 1.如果路径为/  则加载index.html
 *    1.1  同时要引入css   图片
 * 2.如果路径为/about  则加载about.html
 * 3.如果路径为/new  则加载new.html
 * 4.路径匹配不到则加载404.html
 * 
 * 
 */
var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
	if(req.url=="/favicon.ico"){
		return
	}
	if(req.url=="/"){
		fs.readFile("./public/index.html",(err,data)=>{
			res.end(data)
		})
	}else if(req.url=="/about"){
		fs.readFile("./public/about.html",(err,data)=>{
			res.end(data)
		})
	}else if(req.url=="/new"){
		fs.readFile("./public/new.html",(err,data)=>{
			res.end(data)
		})
	}else if(req.url=="/index.css"){
        fs.readFile("./public/index.css",(err,data)=>{
			res.end(data)
		})
	}else{
		fs.readFile("./public/404.html",(err,data)=>{
			res.end(data)
		})
	}
}).listen(3000)