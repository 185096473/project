// 目录
var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
	// 创建目录  mkdir
	if(req.url=="/favicon.ico"){
		return
	}
	// fs.mkdir("./public",(err)=>{
	// 	if(err){
	// 		throw err
	// 	}
	// 	console.log("创建成功")
	// 	res.end("")
	// })
	// 删除目录   rmdir
	// fs.rmdir("./public",(err)=>{
	// 	if(err){
	// 		throw err
	// 	}
	// 	console.log("删除成功")
	// 	res.end("")
	// })
	//读取目录  readdir
	fs.readdir("./static",(err,data)=>{
		if(err){
			throw err
		}
		console.log(data)
		res.end("")
	})
}).listen(3000)