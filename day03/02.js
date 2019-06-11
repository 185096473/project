//真正路由的开端
var http=require("http")
var route=require("./route")
http.createServer((req,res)=>{
    if(req.url=="/"){
		route.showIndex(req,res)
	}else if(req.url=="/about"){
		route.showAbout(req,res)
	}else if(req.url=="/new"){
		route.showNew(req,res)
	}else{
		route.show404(req,res)
	}
}).listen(3000)