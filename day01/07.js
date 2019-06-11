var http=require("http")
http.createServer((req,res)=>{
	 res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
	 res.write("232323")
	//  如何能解析对应的标签？
	 res.write('<h1 style="width:100px;height:100px;background:#f00">eeeeeee</h1>')
     res.end("")
}).listen(3000)
/**
 * 作业：
 * 1.如何能解析对应的标签？
 * 2.预习fs  文件系统  path  npm
 * 
 * 
 */