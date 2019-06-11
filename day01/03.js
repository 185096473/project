var http=require("http")
var url=require("url")
http.createServer((req,res)=>{
   if(req.url=="/favicon.ico"){
	   return 
   }
   var path=url.parse(req.url).path          //取到端口后面的所有内容
   var search=url.parse(req.url).search      //取到包含？的后面所有内容
   var query=url.parse(req.url).query        //？后面所有的内容  不包含问号
   var pathName=url.parse(req.url).pathname  //端口后面  ？前面的内容
   console.log("path"+path)
   console.log("search"+search)
   console.log("query"+query)
   console.log("pathname"+pathName)
   res.end("32434")

}).listen(3000)