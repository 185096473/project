var path=require("path")
var http=require("http")
http.createServer((req,res)=>{
	//path   处理文件路径
	// var newpath=path.resolve("./a////////b/c//////.")
	//作用：解析成正确的路径   绝对路径
	// normalize   标准化路径
	/**
	 * 1.如果有多个斜杠则会替换成一个
	 * 2.会保留最后一个斜杠
	 * 3.注意..和.
	 */
	// var newpath=path.normalize("/a////b/.")
	//join   
	/**
	 * 1.合并成一个标准化路径
	 * 2.注意..和.
	 * 3.参数必须是字符串
	 * 
	 */
	// var newpath=path.join("/a","b","f/g","..")
	// dirname  返回一个路径的目录
	// var newpath=path.dirname("/a/b/c")
	// basename 返回路径中的最低级的目录名称
	// var newpath=path.basename("/a/b/c/index.html")
	// exactname 扩展名    获取扩展名
	// var newpath=path.extname("/a/b/c/index.html")
	console.log(newpath)
    res.end("")
}).listen(3000)