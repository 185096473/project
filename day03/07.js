var http=require("http")
var url=require("url")
var fs=require("fs")
var path=require("path")
var sd=require("silly-datetime")
// 处理form表单
var fd=require("formidable")
http.createServer((req,res)=>{
	if(req.url=="/favicon.ico"){
		return
	}
	if(req.url=="/dopost" && req.method.toLowerCase()=="post"){
		var form=new fd.IncomingForm()
		form.uploadDir="./upload"
		form.parse(req,(err,fields,files)=>{
            // console.log(fields)   //{}   文本域
			//console.log(files)  //{}     文件域
			//console.log(fields.pic)  //{}     文件域
			// 取到后缀名
			var extname=path.extname(files.pic.name)
			// 获取路径
			var oldPath=files.pic.path
			var tt=sd.format(new Date(),"YYYYMMDDhhmmss")
			var newpath="./upload/"+tt+extname
			fs.rename(oldPath,newpath,(err)=>{
				if(err){
					throw err
				}
				console.log("改名成功")
				res.end("")
			})
			
		})
		
	}
	
}).listen(3000)


/**
 * 模板引擎
 * ejs   art-template  jade
 * 
 * express
 * 
 * 
 */