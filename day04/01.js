/**
 * http   path   url   fs   querystring  moudle   模块
 * 
 * silly-datetime  处理时间戳     formidable  处理表单数据     包
 * 
 * events   事件    操作服务端
 * 
 */
var  events=require("events")
//实例事件
var eventEmitter=new events.EventEmitter
//绑定事件
// eventEmitter.on("start",()=>{
// 	console.log("event start")
// })
// 触发event事件
// eventEmitter.emit("start")     //emit  触发
// eventEmitter.emit("start")
// 触发一次事件
// eventEmitter.once("start",()=>{
// 	console.log("start")
// })
// eventEmitter.emit("start")
// eventEmitter.emit("start")
// 添加错误事件
// eventEmitter.once("error",()=>{
// 	console.log("error")
// })
// eventEmitter.emit("error",new Error("focus error"))
// eventEmitter.emit("error",new Error("arguments must be a string"))
// removeListener
// 添加  addListener   添加到尾部
function six(){
	console.log("six six sex")
}
function two(){
	console.log("lvv")
}
                 //aa 自定义事件   six 函数执行体
eventEmitter.on("aa",six)
eventEmitter.on("aa",two)
// removeAllListener  移除所有事件监听器
eventEmitter.removeListener("aa",six)
//      自定义事件触发器


// .emit("aa")      //$emit





// jq  on  live  bind  delegate  
/* <div id="box">
    <ul>
	
	</ul>
</div>
$.ajax({
	url:"",
	type:"get",
	dataType:"json",
	// 3.0 淘汰
	// success:function(){

	// }
	// fail:
}).done((result)=>{
	$("#box ul li").remove()
	for(var i=0;i<result.data.length;i++){
		$("#box ul").append("<li>'+result.data[i].name+'</li>")
		// $("#box ul").append(`<li>${result.data[i].name}</li>`)
	}
}) */