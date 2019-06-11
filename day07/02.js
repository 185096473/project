// 服务端访问静态资源(目录)
// 把html通过服务端渲染出来
var express=require("express")
var path=require("path")
var app=express()
// __dirname  __filename
console.log(__dirname)
// C:\Users\Rasin\Desktop\secondone\day07
// 使用中间件
app.use(express.static(path.join(__dirname,"./static")))
app.listen(3000) 