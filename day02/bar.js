// exports.a=1
 //   ||
// module.exports.a=1
function show(){
	console.log(1)
}
//exports {}
exports={
	a:1
}
exports={
	show:show()
}
// exports=show()   对象
//    ||
// exports={
// 	show:show()
// }
// module.exports=show()
// exports={
// 	show
// }
// 
