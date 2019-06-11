// 目录
var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
	// 创建目录  watchfile   监听文件的改变   unWatchFile  监听文件的卸载
	if(req.url=="/favicon.ico"){
		return
	}
	fs.watchFile("./static/2.txt",(curr,prev)=>{
		console.log(curr.mtime)
		console.log(prev.mtime)
		res.end("")
	})
	fs.writeFile("./static/2.txt","changed",(err)=>{
		if(err){
			throw err
		}
	})

}).listen(3000)