var http=require("http")
var ejs=require("ejs")
http.createServer((req,res)=>{
	res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
	// Node渲染的方式
	//数据
   var data=[num=30]
//    var result=JSON.stringify(data)
//    res.end(result.toString())
//      ejs渲染的方式   compile 编译   render  渲染
//  模板                      <%=%>  输出
    var str="今年买了一个iphone<%=num%>"
	var result=ejs.render(str,data)
	res.end(result)
}).listen(3000)