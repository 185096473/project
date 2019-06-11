// <!-- module.exports   exports   暴露   抛出 -->
/**
 * module.exports  和 exports  区别
 * 
 * 
 * 
 */
var bar=require("./bar.js")
console.log(bar)
console.log(module)
console.log(exports)
/**
 * 1.exports=module.exports   exports引用module.exports的值
 * 2.module.exports指向的是一个当前模块
 * 3.module.exports的默认值为一个实际对象，而exports的默认为空对象
 * 
 * 
 * 路由
 */