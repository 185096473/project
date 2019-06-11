// require.js   common.js    sea.js
var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
	console.log(req.url)
	// readFile  读文件   异步   readFileSync  同步
//    fs.readFile("./static/1.txt",(err,data)=>{
// 	   res.end(data.toString())
//    })
//   writeFile   写入
//   r  read  读
//   w  write  写
//   a  append  追加
//   flag
      if(req.url=="/favicon.ico"){
		  return 
	  }
     fs.writeFile("./static/2.txt","就感觉风",{"flag":"a"},(err)=>{
		 if(err){
			 return 
		 }
		var data=fs.readFileSync("./static/2.txt","utf-8")
		console.log(data)
		res.end(data)
	 })
	//  把1.txt的内容读取出来完后再写入到2.txt里面   你 
}).listen(3000)
