// 查询字符串     路径url     路径序列化
var queryString=require("querystring")
// var query=queryString.stringify({"a":"dd","b":["cc","dd"]})
// parse  把字符串转化为健值对
var query=queryString.parse("foo=dd&username=q&age=12")
// http://127.0.0.1:3000/a?username=q&age=12
console.log(query)

/**
 * 作业：
 * 1.把path和querystring没讲的自己过一遍
 * 
 */